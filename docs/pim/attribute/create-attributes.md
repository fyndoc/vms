---
custom_edit_url: null
hide_table_of_contents: true
sidebar_label: Create Attributes
title: How to Create Attributes
---

1. The first step is to sign-in to your account. The dashboard screen would appear after your successfully log in.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/dashboard.png)
    <center><em>Figure 1: Visit The Website</em></center><br />

2. Go to the **Master Data** menu.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/master-data.png)
    <center><em>Figure 2: Visit The Website</em></center><br />

3. Go to **Attributes** tab, and click **Create Attribute**.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/create-attribute.png)
    <center><em>Figure 3: Visit The Website</em></center><br />

4. The **Create Attribute** has 5 sections. The first one is **Attribute Details**.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/new-attribute.png)
    <center><em>Figure 4: Visit The Website</em></center><br />

5. Enter the following fields in the **Attribute Details** section:
    * **Attribute Code** - Enter a unique value (numeric, alphabetic, or alphanumeric) that would help you distinguish an attribute from the rest.

    * **Attribute Code** - Enter the name of the attribute, e.g. Colour.

    * **Attribute Type** - Choose the type of input you expect the user to enter, e.g. Number, Short Text, Media, etc. See [List of Attributes](##attribute-type).

    * **Attribute Description** - Describe the attribute for the user to understand its purpose better.

    * **Make this Mandatory** - Tick it if you want the user to compulsorily fill the attribute, without skipping.

    * **Auto Sync to Production** - Tick it if you want the attribute value entered by the user go directly to the production database. This means, the value entered by the user may not undergo any content enrichment process.
    
    * **Tags** - Add one or more tags to help you understand the nature of the attribute, for e.g. `appearance` tag for attributes such as colour, material, pattern, as shown in fig. 5b.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/new-attribute-1.png)
    <center><em>Figure 5a: Visit The Website</em></center><br />

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/tags.png)
    <center><em>Figure 5b: Visit The Website</em></center><br />

6. The next section, i.e., **Specific Settings** depends on the attribute type you selected in the previous step. For example, settings for `Attribute Type = Short Text` may differ from those for `Attribute Type = Media`. See [All Specific Settings](#all-specific-settings) to know more. Since we chose short text as the attribute type, let's see the fields:
    
    * **Impose a Character Limit** - By enabling this toggle button, you can restrict the number of characters that the user can enter in the attribute value. This enables another field called 'Limit Characters to'.

    * **Limit Characters to** - Choose the maximum number of characters the user can enter for the attribute.

    * **Formatting** - Choose the type of formatting you want to apply to the attribute value entered by the user.
        * **None** - Attribute value appears as entered by the user, e.g. for colour attribute, `Dark Blue` becomes `Dark Blue`.
        * **Upper Case** - All characters in the attribute value would turn into capital letters, e.g. `Dark Blue` becomes `DARK BLUE`.
        * **Lower Case** - All characters in the attribute value would turn into small letters, e.g. `Dark Blue` becomes `dark blue`

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/new-attribute-2.png)
    <center><em>Figure 7: Visit The Website</em></center><br />

7. The next section is **Visibility for Non-Admin VMS Users**. Here, non-admin users are those users who may belong to the vendor group (e.g. content enrichers) or your brand group (e.g. content acquirers). 

    You can decide whether you want to expose the attribute value entered by the user to such non-admin groups:
    
    * **Visible** - By disabling this toggle button, you can hide the attribute value from non-admin groups. Whereas, enabling it exposes the attribute value to non-admin groups.

    * **Editable** - By disabling this toggle button, you can prevent non-admin groups from editing the attribute value. Whereas, enabling it allows non-admin groups to change the attribute value.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/visibility.png)
    <center><em>Figure 8: Visit The Website</em></center><br />

    :::info
    **Editable** and **Visible** works hand-in-hand. This means, although you grant editing permission, it would not work unless visibility permission is granted for the attribute.
    :::

    :::tip What usecase does this solve?
    In certain scenarios, you may not want content acquirers, enrichers, or auditors to view/modify brand-sensitive data such as MRP.
    :::

8. The next section is **Display of Attributes on Storefront**. Here, you can control where and how the attribute is showcased/utilised on the customer-facing website.

    * **Filterable** - By enabling this toggle button, you allow customers to filter products based on the attribute. For e.g. if the attribute is "Colour", customers can filter products based on their preferred colours.

    * **Displayable** - By enabling this, you allow the attribute to be shown on the product details page (PDP) or product listing page (PLP).

    * **Searchable** - Enabling this allows customers to search for products based on attribute value. For example, if a customer searches for "Black Nike Shoes" and you have granted searchable permission for the "Colour" attribute, all relevant products with black as their colour attribute value will appear in the search results on the storefront.
    
    * **Comparable** - By enabling this, you allow customers to comnpare two or more products based on the attribute, e.g. screen size.

9. The next section is **JSONata**. Here, JSONata expressions are special instructions that you can use to find and fetch specific information from a JSON data structure. 
