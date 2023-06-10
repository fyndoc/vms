---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Audit
title: Audit
---

## Introduction

Audit is the process of verifying if the content enrichment of SKUs has met the quality requirements. A group of supervisors check whether the enrichment done by the CE team is valid as per the source data and enrichment criteria provided by the CA team. A catalogue manager belonging to the brand selects the SKUs, creates a task, and assigns it to the auditing team.

This document is divided into 2 sections, click and read the one relevant to your role - 
<div class="button-container">
  <button class="member1"><a href="#guide-for-catalogue-manager">I am a catalogue manager</a></button>
  <button class="member2"><a href="#guide-for-auditor">I am an auditor</a></button>
</div>

---

## Guide for Catalogue Manager

As a catalogue manager, you can create an audit task involving only those SKUs that are either in `CE Done` or `Production` state.

1. Go to **Master Data** → **Staged Master Data**.

2. Choose the SKUs that require an audit.

3. Click the **Create Task** button and choose **Content Acquisition Task**.

4. In the **Task Details** section, enter the following details - 
    * **Task Name** - Give a name to the task, e.g. `Smartphone SKU Data Audit`
    * **Task Description** - Write a brief description for the auditing team to understand the purpose of the task.
    * **Task Deadline** - Mention the date and time by which you expect the auditing team to finish the task.
    * **Task Priority** - Choose a task priority (Low, Medium, High) for the auditing team to understand the importance of the task.
    * **Choose File** - If needed, attach other files that might be relevant for the auditing team.

5. In the **Task Assigning** section, enter the following details - 
    * **Allocation Type** - Choose whether the task is for an internal or external auditors. More often than not, auditors are internal to the brand, hence you may choose **Internal**.
    * **Split Task** - You can decide how the task should be split between the auditors. There are namely 2 options - 
        * **No Split** - Choose this option if the task cannot be divided because there is only one auditor (1 member).
        * **Equally** -  Choose this option if you want to divide the task equally between members of the auditing team or independent auditors. This enables another field called 'Assign'.
    * **Assign** - Assuming that you chose equal split earlier, you have 2 options - 
        * **Team** - If you have created a team of auditors, choose this option to divide the task equally between the members of that team. A dropdown to choose the team would appear. Example -  If you chose 100 SKUs and you have a 4-member team, each member gets 25 SKUs for which they have to validate the enriched data.
        * **Members** - If you have not created a team of auditors, choose this option to divide the task equally between individual auditors added to your organisation. A dropdown to choose the members would appear. Example -  If you chose 100 SKUs, and have 3 independent auditors, the first and second member gets 33 SKUs each, and the third member gets 34 SKUs.

6. Click **Create Task**. This will also generate a Task ID.

You can also track a task from the **Task** menu (top navigation bar). It shows a list of all the tasks you created. The list helps you get a brief idea of the task type, status, deadline, assigned members, and many more.

---

## Guide for Auditor

As an auditor, you have 3 responsibilities:
* [Audit the enriched or production SKUs](#audit-the-skus)
* [Create a new CE task for rejected SKUs](#create-a-task-for-rejected-skus)
* [Move the approved SKUs to production](#move-the-skus-to-production)

### Audit the SKUs

1. Go to the **Tasks** menu of your organisation. It shows a list of all the tasks assigned to you.

2. Click on the task. A **Task Detail** page would open.

    :::tip Reference
    [Click here](/docs/task-manager/extra/audit-task-details) to know the meaning of each field on the **Task Detail** page.
    :::

3. Click on the batch assigned to you under the **Batches** section. A list of SKUs assigned to you for audit activity would be visible on the **Batch SKUs** page.

4. Click on any SKU. There would be 4 tabs available.
    * **Sourcing** - Shows you the content acquisition (CA) template filled by the content acquirer. The CA template helps you understand the SKU better before you begin its audit process. [Click here](/docs/task-manager/ca-template) to know the meaning of each field.
    * **Mandatory** - Shows you the mandatory attributes enriched by the CE team. 
    * **Other** - Shows you the optional enriched by the CE team. 
    * **Query & Comment** -  Shows you the history of queries raised.

    <br />
    
    :::info
    In case of partially enriched SKUs, **Selected Attributes** tab would be visible in place of **Mandatory** and **Other** tabs
    :::

5. Check whether the attribute data filled by the enrichers meet the enrichment criteria and source data given in the **Sourcing** tab. Next, you may take any of the 4 decisions:
    * Use the thumbs down icon to reject the attribute, and mention the rejection reason for the CE team to know. If you do this, you will not be able to approve the SKU.
    * Use the **Edit Attributes** option to change the attribute value yourself, instead of passing to the CE team. If you do this, you will be able to approve the SKU.
    * Use the **Reject SKU** button if you feel that majority of the enriched data failed to meet the quality standards, and mention the rejection reason for the CE team to know.
    * Use the **Accept SKU** button if you feel that the enriched data satisfies the quality standards. The attribute status will show as `DONE`.


In addition to the above details, there is 1 more option (button) available to you:
**Raise Query** - Use this option to raise an issue to the category team and get your queries resolved. The task status will show as `IN QUERY`.

:::tip
Instead of doing the above steps for each SKU, you can directly approve or reject multiple SKUs from the **Batch SKUs** page as seen in step 3.
:::

### Create a task for rejected SKUs

Select the rejected SKUs from the batch assigned to you under the **Batches** section (as seen in step 3 above). Next, refer the [content enrichment guide](/docs/task-manager/content-enrichment#guide-for-catalogue-manager) to know the process of creating a CE task, and assign it to the same CE team that initially performed the enrichment.


### Move the SKUs to production

1. Go to **Master Data** → **Staged Master Data**.

2. Choose the SKUs approved by you during the audit.

3. Click the **Sync to Production** button. Your SKUs would be ready for consumption by the sales channels.




 














