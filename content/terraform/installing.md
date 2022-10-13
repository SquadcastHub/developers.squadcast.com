---
title: Get started
pcx_content_type: how-to
weight: 1
meta:
  title: Install Terraform
---

# Install Terraform

Terraform ships as a single binary file. The examples below include installation information for popular operating systems.

For official instructions on installing Terraform, refer to [Install Terraform](https://learn.hashicorp.com/terraform).

## Linux

On Linux, download and place the binary in your `PATH`.

```sh
$ wget -q https://releases.hashicorp.com/terraform/1.3.2/terraform_1.3.2_linux_arm64.zip

$ unzip terraform_1.3.2_linux_amd64.zip
Archive:  terraform_1.3.2_linux_amd64.zip
  inflating: terraform

$ sudo mv terraform /usr/local/bin/terraform

$ terraform version
Terraform v1.3.2
```

## Mac

The easiest way to install Terraform on macOS is with Homebrew.

```sh
$ brew install terraform

==> Downloading https://ghcr.io/v2/homebrew/core/terraform/manifests/1.3.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/terraform/blobs/sha256:95ce6ce52c67575858cfd9d65058cf31ff9de8503208c7e75887571f17c79cf5
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:95ce6ce52c67575858cfd9d65058cf31ff9de8503208c7e75887571f17c79cf5?se=2022-10-13T09%3A25%3A00
######################################################################## 100.0%
==> Pouring terraform--1.3.2.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/terraform/1.3.2: 6 files, 64MB

$ terraform version
Terraform v1.3.2
```

## Windows

1.  Download the 32 or 64-bit executable from the [Download Terraform](https://www.terraform.io/downloads) page.
2.  Unzip and place `terraform.exe` somewhere in your path.

## Other

For additional installers, refer to the [Download Terraform](https://www.terraform.io/downloads) page.
