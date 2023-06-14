---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Production Master Data
title: Production Master Data
---

SKUs that have undergone all the task management processes such as content acquisition, content enrichment, and audit are present in the Production Master Data. 

SKUs synced to production after undergoing the task management processes are available in the production database. Further, such SKUs will be available for consumption on sales channels or storefronts.

:::note
SKUs in production can also undergo task management processes (say partial content enrichment) if required.
:::

---

## SKU Details

If you click an SKU in the production product data, you will get 3 tabs:

* **Mandatory** - Shows all the mandatory attributes of the SKU, and the value filled within those attributes.
* **Other** - Shows all the option attributes of the SKU, and the values may or may not be empty.
* **Content Acquisition Criteria** - Shows the Global CA template filled by the content acquisition team. The template is meant to help enrichers meet a couple of criteria during the content enrichment of the given SKU.
* **SKU Grouping** - Here, you can group your SKUs and attach a relationship. You must create a relationship first using [Relationship Builder](/docs/pim/relationships.md) before attaching it to the SKUs.

---

## Adding Relationship to an SKU

You can group SKUs based on variant relationship or parent-child relationship:
* **Variant Relationship** - It means the given SKU has other variants such as colour variant, material variant, etc. For grouping SKUs under variant relationship, the SKUs must belong to the same template, e.g. footwear template.
* **Parent Child Relationship** - It means the given SKU comes along with another related or unrelated SKU for sale.

### Grouping SKUs as Variants

1. In **SKU Grouping** tab, click the **Add Relationship** button. A right-panel titled `Relationship` would appear. 

2. Select `Variant` from the **Choose Type** dropdown.

3. From the **Choose Relationship** dropdown, select the relationship you created using the relationship builder. For example, `Colour Variant` indicates that the given SKU is being grouped with another SKU having a different colour.

4. From the **Choose SKUs to form group** dropdown, select one or more SKUs that are variants of the given SKU.

5. Click **Create Relationship**.

### Grouping SKUs as Parent-Child

1. In **SKU Grouping** tab, click the **Add Relationship** button. A right-panel titled `Relationship` would appear. 

2. Select `Parent-Child` from the **Choose Type** dropdown.

3. The **Primary SKU** (non-editable field) indicates that the given SKU is itself the parent SKU. 

4. From the **Choose SKUs to form group** dropdown, select one or more SKUs that are child of the given SKU.

5. For each of the child SKU you added in the above step, add the quantity.

    :::tip Usecase
    Example: Bundling 4 speakers (child SKU) and 2 remotes (child SKU) with 1 TV (primary SKU)
    :::

6. Click **Create Relationship**.




3. From the **Choose Relationship** dropdown, select the relationship you created using the relationship builder. For example, `Colour Variant` indicates that the given SKU is being grouped with another SKU having a different colour.

4. From the **Choose SKUs to form group** dropdown, select one or more SKUs that are variants of the given SKU.

5. Click **Create Relationship**.








