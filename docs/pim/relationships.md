---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Relationship Builder
title: How to Create Relationships
---

You can group SKUs together using relationships. The grouping can be of two types: 
* Variant
* Parent-Child

## Variant

1. Go to the **Settings** menu.

2. Go to the **Relationships** tab, and click **Add Relationship**.

3. A panel would open on the right side for you to fill the following details.
    * **Relationship Name** - Give a name to the relationship, e.g. Colour Variant
    * **Relationship Description** - (Optional) Write a description to explain the relationship, e.g. *colour variants are nothing but same product with different colours*
    * **Type** - Choose 'Variant'
    * **Template** - Select the template whose SKUs can have the relationship you are creating:
        * **All templates** - (Default) SKUs of any template can be grouped with another SKU belonging to the same template.
        * **Choose templates** - SKUs of specific templates can be grouped with another SKU belonging to the same template.
    * **Attributes** - Choose the attributes based on which the relationship would be created. For e.g. `Primary Colour` attribute can be chosen to form the basis for `Colour Variants` relationship to exist. This will determine which attribute(s) are responsible for the SKUs to be variants of each other.

4. Click **Create Relationship**.

---

## Parent-Child

1. Go to the **Settings** menu.

2. Go to the **Relationships** tab, and click **Add Relationship**.

3. A panel would open on the right side for you to fill the following details.
    * **Relationship Name** - Give a name to the relationship, e.g. Bundle
    * **Relationship Description** - (Optional) Write a description to explain the relationship, e.g. *bundles are nothing but a main product supplemented with other products*
    * **Type** - Choose 'Parent-Child'
    * **Maximum Quantity of Child SKUs** - The total quantity of supplementary products you can bundle together with a parent product. Example: If a shirt is bundled with 1 tie and 2 bows, you should enter 3 in this field.
    
4. Click **Create Relationship**.

:::note
You can attach relationships only to the production SKUs present in Master Data
:::