---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Archive or Recall Tasks
title: Archive or Recall Tasks
---

:::info
This document is only meant for those responsible for creating tasks, i.e. catalogue manager or admin
:::

Assume you are a catalogue manager who assigned a task to a team. At a later point of time, you have the flexibility to archive the task or recall it. It's important to note that there is a difference between archive and recall, and you will learn it in this document.

## Archiving a Task

Archiving is the process of halting a task. Let's say, you assigned a task of enriching 100 SKUs to the CE team. Assume that the CE team has worked upon 25 SKUs and you wish to archive the task. In such a situation, you will be able to archive the task with 75 SKUs returning from `In Progress` state to their previous state. The 25 SKUs with `DONE` status will be unaffected since they were already worked upon.

1. Go to the **Tasks** menu of your organisation. It shows a list of all the tasks you created.

2. Click on the task you wish to archive. A **Task Detail** page would open.

3. Click the **More** button situated at the top-right corner.

4. Click **Archive Task**.

5. A dialog box would appear. Confirm the archiving process.

The task status would show as `Archived` on the task listing page.

:::tip Remember
You can archive any type of tasks: Acquisition tasks, Enrichment tasks, or Audit tasks
:::

---

## Recalling a Task

Recalling is the process of rolling back the task and transferring it to someone else. Let's say, you assigned a task of enriching 300 SKUs to an external vendor. Assume that the vendor has worked upon 100 SKUs and you wish to recall the task. In such a situation, you will be able to recall the task with 200 SKUs returning from `In Progress` state to their previous state. The 100 SKUs with `DONE` status will be unaffected since they were already worked upon. 

Next, you will get an option to create a new task out of the 200 SKUs you recalled. You can then assign the new task to some other vendor or team.

1. Go to the **Tasks** menu of your organisation. It shows a list of all the tasks you created.

2. Click on the task you wish to recall. A **Task Detail** page would open.

3. Click the **More** button situated at the top-right corner.

4. Click **Recall Task**.

5. A dialog box would appear. Confirm the recalling process.

The task status would show as `Recalled` on the task listing page. The SKUs would now be a part of the new task you created.

:::caution Restriction
You can recall only those enrichment tasks you assigned to external vendors
:::
