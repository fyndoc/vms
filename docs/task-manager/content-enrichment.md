---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Content Enrichment
title: Content Enrichment
---

## Introduction

Content enrichment involves improving and populating data in all attributes of a product. For example, some of the known attributes of a T-Shirt include sleeve type, sleeve length, neck type, colour, price, etc. For the customers to understand the product better, it's the content enricher's responsibility to ensure such attributes have enriched data.

Content enrichment can be done by an internal team or external vendors/agencies, depending on the organisation. The content acquirer provides the source information and enrichment criteria to avoid incorrect information in the catalogue.

This document is divided into 2 sections, click and read the one relevant to your role - 
<div class="button-container">
  <button class="member1"><a href="#guide-for-catalogue-manager">I am a catalogue manager</a></button>
  <button class="member2"><a href="#guide-for-content-enricher">I am a content enricher</a></button>
</div>

---

## Guide for Catalogue Manager

As a catalogue manager, you can create a content enrichment (CE) task involving only those SKUs that are either in `CA Done`, `Production`, `CE Done`, or `Audit Rejected` state.

There are two types of content enrichment: **Full Content Enrichment** and **Partial Content Enrichment**

### Full Content Enrichment

:::caution Restriction
For a full enrichment task, SKUs may belong to multiple categories, but all the attributes have to be filled since there is no flexibility to selectively nominate the attributes.
:::

1. Go to **Master Data** → **Staged Master Data**.

2. Choose the SKUs (belonging to the same category) for which the CE team should perform enrichment.

3. Click the **Create Task** button and choose **Partial Content Enrichment Task**.

4. In the **Task Details** section, enter the following details - 
    * **Task Name** - Give a name to the task, e.g. `Smartphone SKU Data Enriching`
    * **Task Description** - Write a brief description for the CE team to understand the purpose of the task.
    * **Task Deadline** - Mention the date and time by which you expect the CE team to finish the task.
    * **Task Priority** - Choose a task priority (Low, Medium, High) for the CE team to understand the importance of the task.
    * **Choose File** - If needed, attach other files that might be relevant for the CE team.

5. In the **Task Assigning** section, enter the following details - 
    * **Allocation Type** - Choose whether the task is for an internal or external team. More often than not, content enrichers are external to the brand. If you select `External`, you will get an option to choose the vendor, but you don't have the option to split the task. Instead, the external vendor will get the option to split the task once your task is accepted by the vendor. Whereas if you choose `Internal`, you can split the task as explained below.
    * **Split Task** - You can decide how the task should be split between the content enrichers. There are namely 2 options - 
        * **No Split** - Choose this option if the task cannot be divided because there is only one content enricher (1 member).
        * **Equally** -  Choose this option if you want to divide the CE task equally between members of a team or independent members. This enables another field called 'Assign'.
    * **Assign** - Assuming that you chose equal split earlier, you have 2 options - 
        * **Team** - If you have created a team of content enrichers, choose this option to divide the task equally between the members of that team. A dropdown to choose the team would appear. Example -  If you chose 100 SKUs and you have a 4-member team, each member gets 25 SKUs for which they have to enrich all the attributes.
        * **Members** - If you have not created a team of content enrichers, choose this option to divide the task equally between individual content enrichers added to your organisation. A dropdown to choose the members would appear. Example -  If you chose 100 SKUs, and have 3 independent content enrichers, first and second member gets 33 SKUs each, and the third member gets 34 SKUs.

6. Click **Create Task**. This will also generate a Task ID.

You can also track a task from the **Task** menu (top navigation bar). It shows a list of all the tasks you created. The list helps you get a brief idea of the task type, status, deadline, assigned members, and many more.


### Partial Content Enrichment

Here, the content enricher is not expected to fill all the attributes present in the catalogue. As a catalogue manager, you will nominate only those attributes that were either missed out previously or recently added.

:::caution Restriction
For a partial enrichment task, all the SKUs must belong to the same category, but there is flexibility to nominate the attributes that require enrichment.
:::

1. Go to **Master Data** → **Staged Master Data**.

2. Choose the SKUs (which may belong to more than one category) for which the CE team should perform enrichment.

3. Click the **Create Task** button and choose **Partial Content Enrichment Task**.

4. The **Task Details** section is same as the one you saw in [Full Content Enrichment](#full-content-enrichment) except for the addition of 2 more fields:
    * **Selected Template**: (Disabled) Since SKUs for partial enrichment belong to the same category, this field shows the template attached to the category.
    * **Select Attribute**: Nominate one or more attributes for enrichment.

5. The **Task Assigning** section is also same as the one you saw in [Full Content Enrichment](#full-content-enrichment).
   
6. Click **Create Task**. 

---

## Guide for Content Enricher

There are two types of content enrichment tasks you might receive: **Full Content Enrichment Task** and **Partial Content Enrichment Task**

### Full Content Enrichment Task

1. Go to the **Tasks** menu of your organisation. It shows a list of all the tasks assigned to you.

2. Click on the task. A **Task Detail** page would open.

    :::tip Reference
    [Click here](/docs/task-manager/extra/ce-task-details) to know the meaning of each field on the **Task Detail** page.
    :::

3. If you are an external vendor, you can accept or reject a CE task. Click **Accept Task** to willingly take the CE task, or click **Reject** to not take the CE task. If you take the task, the SKUs move to `In Progress` state. 

    :::info
    If you are an internal team member in the organisation, there is no such flexibility to accept/reject a task. In that case, the SKUs would be in `In Progress` state by default.
    :::

4. If you are an external vendor, as a vendor manager, you can choose to further split the batch assigned to you by clicking **Split Batch** under the **Batches** section. Skip to step 5, if you are not a vendor manager. 

    You can decide how the task should be split between the content enrichers in your team. There are namely 2 options - 
    * **No Split** - Choose this option if the task cannot be divided because there is only one content enricher (1 member).
    * **Equally** -  Choose this option if you want to divide the CE task equally between members of a team or independent members. This enables another field called 'Assign'.
    * **Assign** - Assuming that you chose equal split earlier, you have 2 options - 
        * **Team** - If you have created a team of content enrichers, choose this option to divide the task equally between the members of that team. A dropdown to choose the team would appear. Example -  If you chose 100 SKUs and you have a 4-member team, each member gets 25 SKUs for which they have to enrich all the attributes.
        * **Members** - If you have not created a team of content enrichers, choose this option to divide the task equally between individual content enrichers added to your organisation. A dropdown to choose the members would appear. Example -  If you chose 100 SKUs, and have 3 independent content enrichers, the first and second member gets 33 SKUs each, and the third member gets 34 SKUs.
    
    
    <br />

    :::tip info
    If you are an internal team member in the organisation, the system automatically splits the task into batches for you if the catalogue manager had chosen the split option while creating a CE task.
    :::

5. Click on the batch assigned to you under the **Batches** section. A list of SKUs assigned to you for content enrichment activity would be visible on the **Batch SKUs** page.

6. Click on any SKU. There would be 4 tabs available.
    * **Sourcing** - Shows you the content acquisition (CA) template filled by the content acquirer. The CA template helps you understand the SKU better before you begin its enrichment process. [Click here](/docs/task-manager/ca-template) to know the meaning of each field.
    * **Mandatory** - Shows you the mandatory attributes you need to enrich. 
    * **Other** - Shows you the optional attributes you need to enrich. 
    * **Query & Comment** - Use this option to raise an issue to a concerned team and get your queries resolved. This will put the SKU from `In Progress` state to `In Query` state. 

    <br />

    :::info Why do I see some non-editable attributes
    As an enricher, you might not be able to edit the attributes that were initially marked as non-editable by the Admin.
    :::

7. Click **Submit** if you have completed the enrichment of the SKU. The task status will show as `DONE`. 

In addition to the above details, there are 2 more options (buttons) available to you:
* **Save As Draft** - Use this option if you have not completed the enrichment but wish to save the details you filled.
* **Resolve Query** - Use this option to close a query so that the SKU comes back to `In Progress` state for you to work upon.

### Partial Content Enrichment Task

This is same as full content enrichment task (explained above) except for the following difference:

You have to enrich only those attributes selected by the catalogue manager and not all the attributes present in the template attached to the SKU. In other words, once you click on an SKU (refer step 6 in [Full Content Enrichment Task](#full-content-enrichment-task)), you get only 3 tabs:
* Sourcing
* Selected Attributes
* Query & Comments

The **Selected Attributes** tab shows the attributes selected by the catalogue manager for you to enrich.















