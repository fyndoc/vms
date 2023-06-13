---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Manage Account
title: Manage Account
---


## Introduction

The Manage Account section provides you to add and manage the following:
* Information about your organisation
* Members added to your organisation to perform tasks
* Teams created by clubbing members as per their roles
* External vendors that provide content enrichment services
* Provision to integrate with external data source via API token

To access the account section, click the organisation dropdown in the top-right and click **Manage Account**.

![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/misc/account.png)
<center><em>Figure 1a: Manage Account</em></center><br />

![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/misc/my-account.png)
<center><em>Figure 1b: Manage Account Page</em></center><br />

---

## Organization Details

Here, you can view and edit the information of the organisation created on Catalog Cloud

* **Organization Name** - It is the name of the brand/vendor organisation you created or were added to. Initially, it is added by the admin during the process of creating an organisation on Catalog Cloud. 
* **Company Size** - Approximate number of employees present in the organisation. Initially, it is added by the admin during the process of creating an organisation on Catalog Cloud. 
* **Country** - The country where the organisation is located, e.g. India
* **PIN Code/Zip Code** - A 6-digit code of the location where the organisation is located, e.g. 572101
* **City/Town** - The city where the organisation is located, e.g. Bengaluru
* **State** - The state where the organisation is located, e.g. Karnataka

---

## Members

Here you get 2 tabs:
* **Active** - Here you can see the members added to your org, their role, and an option to activate/deactivate the member. By deactivating a member, the user can no longer sign in to the organisation.
* **Invited** - Here you can see the members who have been invited to join the organisation but are yet to accept the invitation. Once they accept and sign up, they would be visible on the **Active** tab.

**Inviting a Member**

1. Click the **Add Members** button.
2. Type the email ID of the individual whom you want to invite. 
3. Press `Enter`. This way you can type more email IDs and invite in bulk.
    :::info
    Email IDs already registered in Catalog Cloud show up in lilac colour. Unregistered email IDs show up in pink colour.
    :::
4. Choose a role for the member:
    * **Admin** - Owner of the account with maximum permissions
    * **Supervisor** - Creates and manages tasks
    * **Content Acquisition** - Gathers source data of SKU and creates enrichment criteria
    * **Content Enrichment** - Fills and enriches the attributes of SKUs
    * **Auditor** - Checks if the enrichment of SKUs matches the quality standards
5. Choose a team in which the member must be put (see [Create Teams](#teams)).

---

## Teams

You can add members and form teams in your organisation. The advantage of having this feature is that it becomes easy to assign a task to a team, rather than adding multiple assignees to a task.

1. Click the **Add Team** button.
2. Give a name to the team under **Team Name**.
3. Choose the members you wish to add to the team.
4. Click **Create Team**.

:::tip
You can create a separate CA team, CE team, auditing team, admin team
:::

---

## Vendors

You can add vendors to your organisation. These vendors are generally agencies that provide content enrichment services. Catalog Cloud already comes with a list of vendors for you to choose from.

1. Click the **Add Vendor** button.
2. Choose the vendor you wish to add to your organisation. You can choose one or more vendors.
3. Click **Save**.

---

## Token

You can integrate an external source (e.g. SAP) for flowing SKU data to your organisation on Catalog Cloud. To integrate a data source, you will have to create a token using the following fields:

1. **Token Name** - Give any name to the token that will help you identify the data source.
2. **API Key** - Enter the alphanumeric key for authenticating the integration with your data source.

---

## Webhook

As an organisation, you can also configure webhooks to listen to events.




