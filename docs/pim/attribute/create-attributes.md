---
custom_edit_url: null
hide_table_of_contents: true
sidebar_label: Create Attributes
title: How to Create Attributes
---

1. The first step is to sign in to your account. The dashboard screen would appear after you successfully log in.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/dashboard.png)
    <center><em>Figure 1: Signing In</em></center><br />

2. Go to the **Settings** menu.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/settings.png)
    <center><em>Figure 2: Settings Menu</em></center><br />

3. Go to the **Attributes** tab, and click **Create Attribute**.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/attribute-nav.png)
    <center><em>Figure 3: Attribute Tab</em></center><br />

4. The **Create Attribute** has 5 sections. The first one is **Attribute Details**.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/new-attribute.png)
    <center><em>Figure 4: Create Attribute</em></center><br />

5. Enter the following fields in the **Attribute Details** section:
    * **Attribute Code** - Enter a unique value (numeric, alphabetic, or alphanumeric) that would help you distinguish an attribute from the rest.

    * **Attribute Name** - Enter the name of the attribute, e.g. Colour.

    * **Attribute Type** - Choose the type of input you expect the user to enter, e.g. Number, Short Text, Media, etc. See [List of Attributes](/docs/pim/attribute/deep-dive). Let's choose `Short Text` as an example.

    * **Attribute Description** - Describe the attribute for the user to understand its purpose better.

    * **Make this Mandatory** - Tick it if you want the user to compulsorily fill the attribute, without skipping.

    * **Auto Sync to Production** - Tick it if you want the attribute value to go directly to the production database. This means the attribute will not undergo any task management processes. Neither an audit nor any content acquisition/content enrichment activity would be performed for the attribute. This is useful when the attribute value comes through a direct integration from a source, say SAP/ERP.

6. The next section is **Visibility for Non-Admin VMS Users**. Here, non-admin users are those users who may belong to the vendor group (e.g. content enrichers) or your brand group (e.g. content acquirers). 

    You can decide whether you want to expose the attribute value entered by the user to such non-admin groups:
    
    * **Visible** - By disabling this toggle button, you can hide the attribute value from non-admin groups. Whereas, enabling it exposes the attribute value to non-admin groups.

    * **Editable** - By disabling this toggle button, you can prevent non-admin groups from editing the attribute value. Whereas, enabling it allows non-admin groups to change the attribute value.

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/visibility.png)
    <center><em>Figure 5: Non-admin VMS settings</em></center><br />

    :::info
    **Editable** and **Visible** work hand-in-hand. This means, although you grant editing permission, it would not work unless visibility permission is granted for the attribute.
    :::

    :::tip What usecase does this solve?
    In certain scenarios, you may not want content acquirers, enrichers, or auditors to view/modify brand-sensitive data such as MRP.
    :::

7. The next section is **Display of Attributes on Storefront**. Here, you can control where and how the attribute is showcased/utilised on the customer-facing website.

    * **Display on PDP** - By enabling this, you allow the attribute to be shown on the product details page (PDP).

    * **Display on PLP** - By enabling this, you allow the attribute to be shown on the product listing page (PLP).

    * **Filterable** - By enabling this toggle button, you allow customers to filter products based on the attribute. For e.g. if the attribute is "Colour", customers can filter products based on their preferred colours.

    * **Searchable** - Enabling this allows customers to search for products based on attribute value. For example, if a customer searches for "Black Nike Shoes" and you have granted searchable permission for the "Colour" attribute, all relevant products with black as their colour attribute value will appear in the search results on the storefront.
    
    * **Comparable** - By enabling this, you allow customers to compare two or more products based on the attribute, e.g. screen size.

8.  Add one or more tags to help you understand the nature of the attribute, for e.g. `appearance` tag for attributes such as colour, material, pattern, etc.

    The purpose of tags is to make it easy for the user to search and select attributes for the templates. For example, while creating a template, if you search with a tag called `appearance`, all attributes having this tag would be listed at once so that you can add all of them together to the template. Read [selecting attributes for template](/docs/pim/template/create-templates#template-details--attribute-selection). 

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/new-attribute-1.png)
    <center><em>Figure 6a: Adding Tag</em></center><br />

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/tags.png)
    <center><em>Figure 6b: Sample Tag</em></center><br />

    :::tip 
    You can also search attributes on the attribute listing page using the tag filter.
    :::

9. The next section, i.e., **Specific Settings** depends on the attribute type you selected in the previous step. For example, settings for `Attribute Type = Short Text` may differ from those for `Attribute Type = Media`. See [All Specific Settings](#all-specific-settings) to know more. Since we chose short text as the attribute type, let's see the fields:
    
    * **Impose a Character Limit** - By enabling this toggle button, you can restrict the number of characters that the user can enter in the attribute value. This enables another field called 'Limit Characters to'.

    * **Limit Characters to** - Choose the maximum number of characters the user can enter for the attribute.

    * **Formatting** - Choose the type of formatting you want to apply to the attribute value entered by the user.
        * **None** - Attribute value appears as entered by the user, e.g. for colour attribute, `Dark Blue` becomes `Dark Blue`.
        * **Upper Case** - All characters in the attribute value would turn into capital letters, e.g. `Dark Blue` becomes `DARK BLUE`.
        * **Lower Case** - All characters in the attribute value would turn into small letters, e.g. `Dark Blue` becomes `dark blue`

    ![QG7](https://cdn.pixelbin.io/v2/doc/original/vms/attribute/new-attribute-2.png)
    <center><em>Figure 7: Specific Settings</em></center><br />

10. The next section is **JSONata**. Read only if your SKUs flow through an external data source.

    If you receive a JSON body containing the SKU details, a JSONata expression helps you parse that JSON and retrieve the value of an attribute. Moreover, it helps to map the attribute from the external data source with the attribute created by you in the system. Thereafter, the attribute values can flow seamlessly when the SKU is synced to production.

    :::tip Reference
    https://jsonata.org/
    :::
