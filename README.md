# Squadcast Developer Docs

**[View the docs →](https://developers.squadcast.com/)**

Note: This devoloper portal is inspired from Cloudflare developer portal and we have forked [their repository](https://github.com/cloudflare/cloudflare-docs) to create this.


## Setup

You must have [Hugo](https://gohugo.io) installed on your system and available in your `$PATH` as a global binary. Most operating systems are supported – follow the relevant [Install Hugo](https://gohugo.io/getting-started/installing) instructions for your operating system guides to get started.

> **Important:** This project is built with version `0.92.2+extended` but `0.92.x` is the minimum required version. You may (probably) use a newer version of Hugo, but will be subject to any Hugo changes.

You must also have a recent version of Node.js (14+) installed. You may use [Volta](https://github.com/volta-cli/volta), a Node version manager, to install the latest version of Node and `npm`, which is a package manager that is included with `node`'s installation.

```sh
$ curl https://get.volta.sh | bash
$ volta install node
```

Finally, you will need to install the Node.js dependencies for this project using npm or another package manager:

```sh
$ npm install
```

## Development

When making changes to the site, including any content changes, you may run a local development server by running the following command:

```sh
$ npm run dev
```

This spawns a server that will be accessible via `http://localhost:1313` in your browser. Additionally, any changes made within the project – including `content/**` changes – will automatically reload your browser tab(s), allowing you to instantly preview your changes!

Additionally, this project includes a CI step for ensuring consistent code style. This applies to all files within the project, including markdown (`*.md`) files, but will not affect the content itself or the content's output display. To see the style error(s), you may run:

```sh
$ npm run lint
```

Finally, some of these code-style errors may be fixed automatically. To do so, you may run:

```sh
$ npm run format
```

### Deployment

Our docs are deployed using [Cloudflare Pages](https://pages.cloudflare.com). Every commit pushed to production will automatically deploy to [developers.squadcast.com](https://developers.squadcast.com), and any pull requests opened will have a corresponding staging URL available in the pull request comments.

### License and Legal Notices

Except as otherwise noted, Squadcast and any contributors grant you a license to the Squadcast Developer Documentation and other content in this repository under the [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/legalcode), see the [LICENSE file](https://github.com/cloudflare/cloudflare-docs/blob/production/LICENSE), and grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT).