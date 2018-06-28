---
slug: drone-for-static-sites
title: Drone for Static Sites
subtitle: Use Drone as a self-hosted knock-off Netlify
date: 2018-06-24
---

Vivamus sagittis lacus vel augue laoreet `rutrum faucibus` dolor auctor. Lorem
ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh
ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit
amet non magna. Donec id elit non mi porta gravida [at eget metus](/).

![Take your static site for a nice stroll](./path.jpg)

# But first, a disclaimer

Before you run off to cancel your Netlify subscription and tweet all your
friends about this new hotness, you should know I don't actually recommend you
use Drone over Netlify if you don't need to.

Netlify provides a ton of great features with lots of polish with the intent of
lessening the development effort on your part. Using Drone means **you** now
need to manage your whole build and deploy process. Maybe you need that kind of
control. But maybe you don't.

It's better if you don't need to use Drone, trust me.

With that out of the way, let's get on to the cool configuration stuff.

![A nice photo](./image.jpg)

# Setting up your `.drone.yml`

Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum
dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida
at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
auctor.

```yaml
# .drone.yml

branches:
  - development

pipeline:
  restore-cache:
    image: drillster/drone-volume-cache
    restore: true
    mount:
      - ./www/node_modules
    volumes:
      - /tmp/cache:/cache

  build-public:
    image: node:9.11.1
    commands:
      - cd www
      - yarn install
      - yarn build

  rebuild-cache:
    image: drillster/drone-volume-cache
    rebuild: true
    mount:
      - ./www/node_modules
    volumes:
      - /tmp/cache:/cache
```

## Disclaimer on usage

Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget
metus.

### Just kidding

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur
et. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non
commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.

```yaml
# .drone.yml

pipeline:

  # ...

  docker-dind:
    image: docker:stable-dind
    privileged: true
    command: [ "--dns=8.8.8.8" ]
    detach: true
    when:
      event: push

  build-image:
    image: docker:stable-dind
    environment:
      - DOCKER_HOST=tcp://docker-dind:2375
      - DOCKER_IMAGE_TAG=${DRONE_REPO_NAME,,}__${DRONE_COMMIT_BRANCH,,}__${DRONE_COMMIT_SHA,,}__www
    commands:
      - cd www
      - mkdir -p build
      - docker build -t $DOCKER_IMAGE_TAG .
      - docker save $DOCKER_IMAGE_TAG --output build/$DOCKER_IMAGE_TAG.tar
    when:
      event: push

  # Deploy development to staging
  deploy:
    image: drillster/drone-rsync
    hosts: 
      - 165.227.12.105
    secrets: [ rsync_key ]
    source: ./www/build/
    target: ~/releases/
    delete: true
    script:
      - export DOCKER_IMAGE_TAG=${DRONE_REPO_NAME,,}__${DRONE_COMMIT_BRANCH,,}__${DRONE_COMMIT_SHA,,}__www
      - docker load --input ~/releases/$DOCKER_IMAGE_TAG.tar
      - (docker stop www || true)
      - (docker rm www || true)
      - docker run --name www -p 80:2015 -d --restart=always $DOCKER_IMAGE_TAG
      - docker system prune -af
    when:
      event: push
```

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer
posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia
bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget
metus.

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStatechart } from 'react-automata'

const statechart = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        LOAD: 'loading',
      },
    },
    loading: {
      on: {
        LOADED: 'loaded',
      },
      onEntry: 'startLoading',
    },
    loaded: {},
  },
}

class Preload extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    start: PropTypes.boolean,
  }

  static defaultProps = {
    items: [],
    start: true,
  }

  constructor(...args) {
    super(...args)

    this.state = {
      completed: [],
      failed: [],
    }
  }

  componentDidMount() {
    if (this.props.start) this.props.transition('LOAD')
  }

  componentWillReceiveProps(nextProps) {
    const { machineState, transition } = this.props
    const { start: willStart } = nextProps

    if (machineState === 'idle' && willStart) transition('LOAD')
  }

  async startLoading() {
    const promises = this.props.items.map(async item => {
      try {
        await fetch(item)
        this.setState({ completed: this.state.completed.concat([item]) })
      } catch {
        this.setState({ failed: this.state.failed.concat([item]) })
      }
    })

    await Promise.all(promises)
    this.props.transition('LOADED')
  }

  calcPercentDone() {
    const { completed, failed } = this.state
    const { items } = this.props

    return (completed.length + failed.length) / items.length
  }

  render() {
    const { completed, failed } = this.state
    const percentDone = this.calcPercentDone()
    const loading = this.props.machineState === 'loading'

    return this.props.children(loading, percentDone, completed, failed)
  }
}

export default withStatechart(statechart)(Preload)
```
