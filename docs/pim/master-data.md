---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Master Data
title: Master Data
---

## Introduction

In Master Data, you can create new SKUs and attach it to a category. The template linked to the category (as seen earlier in the [Template Doc](/docs/pim/template/create-templates#category-mapping)) will automatically apply to the SKU.

You can manually create new SKUs in Master Data, or it can also flow in through external sources, such as SAP (if you integrate). If the mapping between SKU and category is established, all the attributes for that SKU would depend on the template associated with the category.

In Master Data, you have 2 types of data:

* [Staged Master Data](#staged-master-data)
* [Production Master Data](#production-master-data)

---

## Staged Master Data

All new SKUs that are yet to undergo task management processes such as content acquisition, content enrichment, and audit, are present in Staged Master Data.

SKUs present in the staging database will not be available for consumption on sales channels or storefronts. 

Here, you can perform the following actions:

* Create a Content Acquisition Task
* Create a Content Enrichment Task (Full/Partial)
* Create an Audit Task
* Create a Product
* Edit a Product
* Delete a Product
* Search a Product
* Sync a Product to Production 
* Perform Bulk Actions

---

## Production Master Data

SKUs that have undergone all the task management processes such as content acquisition, content enrichment, and audit are present in the Production Master Data.

SKUs synced to production after undergoing the task management processes would be available in the production database. Further, such SKUs will be available for consumption on sales channels or storefronts. 

:::note
SKUs in production can undergo task management processes too (say partial content enrichment) if required.
:::
