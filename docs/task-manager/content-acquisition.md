---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Content Acquisition
title: Content Acquisition
---

## Introduction

Content acquisition is the process of acquiring source data for the enrichment of SKUs. A catalogue manager belonging to the brand selects the SKUs, creates a task, and assigns it to the content acquisition team (CA team).

This document is divided into 2 sections, click and read the one relevant to your role - 
<div class="button-container">
  <button class="member1"><a href="#guide-for-catalogue-manager">I am a catalogue manager</a></button>
  <button class="member2"><a href="#guide-for-content-acquirer">I am a content acquirer</a></button>
</div>

---

## Guide for Catalogue Manager

1. Go to **Master Data** → **Staged Master Data**.

2. Choose the SKUs for which the CA team should acquire source data.

3. Click the **Create Task** button and choose **Content Acquisition Task**.

4. In the **Task Details** section, enter the following details - 
    * **Task Name** - Give a name to the task, e.g. `Smartphone SKU Data Sourcing`
    * **Task Description** - Write a brief description for the CA team to understand the purpose of the task.
    * **Task Deadline** - Mention the date and time by which you expect the CA team to finish the task.
    * **Task Priority** - Choose a task priority (Low, Medium, High) for the CA team to understand the importance of the task.
    * **Choose File** - If needed, attach other files that might be relevant for the CA team.

5. In the **Task Assigning** section, enter the following details - 
    * **Split Task** - You can decide how the task should be split between the content acquirers. There are namely 2 options - 
        * **No Split** - Choose this option if the task cannot be divided because there is only one content acquirer (1 member).
        * **Equally** -  Choose this option if you want to divide the CA task equally between members of a team or independent members. This enables another field called 'Assign'.
    * **Assign** - Assuming that you chose equal split earlier, you have 2 options - 
        * **Team** - If you have created a team of content acquirers, choose this option to divide the task equally between the members of that team. A dropdown to choose the team would appear. Example -  If you chose 100 SKUs and you have a 4-member team, each member gets 25 SKUs for which they have to acquire the source data.
        * **Members** - If you have not created a team of content acquirers, choose this option to divide the task equally between individual content acquirers added to your organization. A dropdown to choose the members would appear. Example -  If you chose 100 SKUs, and have 3 independent content acquirers, the first and second member gets 33 SKUs each, and the third member gets 34 SKUs.

6. Click **Create Task**. This will also generate a Task ID.

You can also track a task from the **Task** menu (top navigation bar). It shows a list of all the tasks you created. The list helps you get a brief idea of the task type, status, deadline, assigned members, and many more.

---

## Guide for Content Acquirer

1. Go to the **Tasks** menu of your organization. It shows a list of all the tasks assigned to you.

2. Click on the task. A **Task Detail** page would open.

    :::tip Reference
    [Click here](/docs/task-manager/extra/ca-task-details) to know the meaning of each field on the **Task Detail** page.
    :::

3. Click on the batch assigned to you under the **Batches** section. A list of SKUs assigned to you for content acquisition activity would be visible on the **Batch SKUs** page.

4. Click on any SKU. An acquisition template would appear for that SKU.

5. Fill the following details in the acquisition template:
    * **Specs URL** - Enter a web link containing the entire specification and A-Z details about the SKU. This source data helps the content enricher understand the SKU in depth.
    * **Image URL** - Enter the link of images of the SKU. This source data helps the content enricher get the bonafide images of the SKU which can be further enhanced by the enricher.
    * **Attachment** - Add any other files (user guides, PDF, PPT) related to the SKU that would help the enricher.
    * **Additional URL** - If required, you may add other web links for the enrichers to refer to.
    * **Rich Media** - Choose `Yes`, if you want the enrichers to add videos, images, or multimedia links to the SKU.
    * **Long Description** - Choose `Yes`, if you want the enrichers to add a long description of the SKU for the storefront customers to read.
    * **Product Manual** - Choose `Yes`, if you want the enrichers to create a product manual for the SKU.
    * **FAQs** - Choose `Yes`, if you want the enrichers to create a list of commonly asked questions for the storefront customers to read.
    * **Support** - Choose `Yes`, if you want the enrichers to add support details.
    * **Notes** - Add an informal note to the enrichers if required.
    * **Priority** - You may set the priority to the SKU so that the enrichers know which SKUs to enrich first.

6. Click **Submit**. The task status will show as `DONE`.

In addition to the above details, there are more options (buttons) available to you:
* **Raise Query** - Use this option to raise an issue to the category team and get your queries resolved. The task status will show as `IN QUERY`.
* **Resolve Query** - (Visible only if you have raised a query) Use this option to close a query if you are satisfied with the resolution provided to you. The SKUs will come back to an `In Progress` state for you to work upon.
* **Don't Proceed** - Use this option if you have insufficient information about the SKU or if you have not received a proper resolution for the queries you raised. This puts the SKU on hold and it will not move to the enrichment stage. The task status will show as `DO NOT PROCEED`.

:::tip
Instead of doing the above steps for each SKU, you can directly mark multiple SKUs as `DO NOT PROCEED` or `IN QUERY` from the **Batch SKUs** page as seen in step 3.
:::

### Adding Media Assets in Bulk

If the content acquisition criteria requires you to upload media or files as an input, and if there are several such attributes for a given SKU, it might become tedious to upload the assets for all those attributes one-by-one. 

The complexity increases further if there are multiple SKUs requiring media or files in their acquisition criteria. The **Asset Manager** utility helps you upload media assets in the easiest manner.

1. Click the batch assigned to you for content acquisition.

2. Choose the SKUs for which you want to upload assets in bulk.

3. Click the **Asset Structure** option available at the top of the list of SKUs. A zip file will be downloaded to your system.

4. Extract the zip file.

5. The folder structure will be as follows: **organization ID** → **SKU Name** → **Attribute Code**. 

    :::info
    The no. of folders present in the extracted parent folder = The no. of SKUs chosen in step 2
    ::: 

6. Go to each SKU folder, and upload the assets in respective attribute folders.

7. Compress the parent folder. The extension should be `.zip`.

8. Return to the screen where you downloaded the asset structure. Make sure none of the SKUs are selected. Click the **Asset Manager** option.

9. Use the file uploader utility to upload your zip file.

10. Click **Submit**. Your asset upload will initiate, and you can view its progress by clicking the **Upload History** button.

:::note
You can also perform partial asset upload. It means, for a given SKU, you can choose to insert the media files for some attribute folders and skip it for other attribute folders.
:::




 














