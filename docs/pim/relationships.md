---
custom_edit_url: null
hide_table_of_contents: false
sidebar_label: Relationships
title: How to Create Relationships
---

You can group SKUs together using relationship. The grouping can be of two types: 
* Variant
* Parent-Child

## Variant

1. Go to the **Settings** menu.

2. Go to **Relationships** tab, and click **Add Relationship**.

3. A panel would open on the right side for you to fill the following details.
    * **Relationship Name** - Give a name to the relationship, e.g. Colour Variant
    * **Relationship Description** - (Optional) Write a description to explain the relationship, e.g. *colour variants are nothing but same product in different colours*
    * **Type** - Choose 'Variant'
    * **Template** - Select the template whose SKU can be grouped together with the relationship you are creating:
        * **All templates** - (Default) SKUs of any template can be grouped with SKU of other template.
        * **Choose templates** - Relationship will be available only for SKUs that follow the same template. It cannot be attached to SKUs belonging to different templates. 
    * **Attributes** - Choose the attributes on the basis of which the relationship would be created. For e.g. `Primary Colour` attribute can be chosen to form the basis for `Colour Variants` relationship to exist. This will determine which attribute(s) are responsible for the SKUs to be variants of each other.

4. Click **Create Relationship**.

---

## Parent-Child

1. Go to the **Settings** menu.

2. Go to **Relationships** tab, and click **Add Relationship**.

3. A panel would open on the right side for you to fill the following details.
    * **Relationship Name** - Give a name to the relationship, e.g. Bundle
    * **Relationship Description** - (Optional) Write a description to explain the relationship, e.g. *bundles are nothing but a main product supplemented with other products*
    * **Type** - Choose 'Parent-Child'
    * **Maximum Quanity of Child SKUs** - The maximum number of supplementary products you can bundle together with a parent product.
    
4. Click **Create Relationship**.