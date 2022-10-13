---
title: Squadcast Terraform
pcx-content-type: tutorial
layout: single
weight: 0
meta:
  title: Squadcast Terraform
---

# Squadcast Terraform

Configure Squadcast using HashiCorp’s “Infrastructure as Code” tool, Terraform. With [Squadcast’s Terraform provider](https://registry.terraform.io/providers/SquadcastHub/squadcast/latest/docs), you can manage your Squadcast account using the same familiar tools you use to automate the rest of your infrastructure. Define and store configuration in source code repositories like GitHub, track and version changes over time, and roll back when needed — all without needing to use the Squadcast APIs.

Report Terraform configuration issues via [GitHub](https://github.com/SquadcastHub/terraform-provider-squadcast/issues/new).

**Squadcast Terraform Registry link**
https://registry.terraform.io/providers/SquadcastHub/squadcast/latest/docs

**Squadcast Terraform Provider Repo**  
https://github.com/SquadcastHub/terraform-provider-squadcast

## Generate Terraform files using Terraformer

[Terraformer](https://github.com/GoogleCloudPlatform/terraformer) is a CLI tool to generate terraform files (`tf`/`json` and `tfstate`) from existing infrastructure (reverse Terraform). Infrastructure to Code.

If you are already using Squadcast via API or the Web UI and would like to generate the Terraform files for your existing Squadcast configuration, you can use our [Squadcast implementation of Terraformer](https://github.com/SquadcastHub/terraformer) to do the same.

We have added Squadcast provider support to the Terraformer project but our [PR](https://github.com/GoogleCloudPlatform/terraformer/pull/1473) is not merged yet. Till it's merged, we request you to use [Squadcast Terraformer](https://github.com/SquadcastHub/terraformer) and the related binaries to generate Terraform files.

For more details about using Terraformer, [check here](./tutorial/how-to-use-terraformer/).