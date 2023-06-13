---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Staged Master Data
title: Staged Master Data
---

All new SKUs that are yet to undergo task management processes such as content acquisition, content enrichment, and audit, are present in Staged Master Data.

SKUs present in the staging database will not be available for consumption on sales channels or storefronts. 

Here, you can perform the following actions:

* Create a Content Acquisition Task
* Create a Content Enrichment Task (Full/Partial)
* Create an Audit Task
* Create a Product (SKU)
* Edit a Product
* Delete a Product
* Search a Product
* Sync a Product to Production 
* Perform Bulk Actions

## Creating an SKU

1. Click **Add Product**.

2. Fill the following details:
    * **SKU** - Enter the SKU code of the product. This can be an alphanumeric code, e.g. BLK-123. It uniquely identifies the size of the product.
    * **Grouped SKU** - Enter a code that unique identifies the product, this is similar to item code.
    * **Category Tree Code** - Use the dropdown to map a category tree to the SKU. The template attached to the selected category tree will be applicable to your SKU. In other words, the attributes from the template will be the attributes for that SKU.
    :::note
    The **Category Tree Code** dropdown contains only the category tree codes that already have a template mapped to it. The templates you created but not mapped to a category would not show up in the dropdown.
    :::

3. Click **Save**.

The newly created SKUs would be in a `Raw` stage. 

Read the [task management section](/docs/task-manager/content-acquisition) to know more about how the SKUs are worked upon by content acquisition, content enrichment, and auditing teams.




