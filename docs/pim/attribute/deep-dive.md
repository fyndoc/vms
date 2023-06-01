---
custom_edit_url: null
hide_table_of_contents: true
sidebar_label: Deep Dive
title: Deep Dive
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Types of Attributes


<Tabs>
  <TabItem value="Short Text" label="Short Text" default>
    <p>
      <strong>Description:</strong> Use it if you want the user to enter a couple of words as an input
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Washing Instructions</code>, short text input can be <code>Rinse, don't wash</code>
    </p>
    <p>
      <strong>Specific Settings:</strong>
      <ul>
        <li><strong>Impose a Character Limit</strong></li> By enabling this toggle button, you can restrict the number of characters that the user can enter in the attribute value. This enables another field called 'Limit Characters to'.
        <li><strong>Limit Characters to</strong></li> Choose the maximum number of characters the user can enter for the attribute.
        <li><strong>Formatting</strong></li> Choose the type of formatting you want to apply to the attribute value entered by the user.
          <ul>
            <li><strong>None</strong></li> Attribute value appears as entered by the user, e.g. for colour attribute, `Dark Blue` becomes `Dark Blue`.
            <li><strong>Upper Case</strong></li> All characters in the attribute value would turn into capital letters, e.g. `Dark Blue` becomes `DARK BLUE`.
            <li><strong>Lower Case</strong></li> All characters in the attribute value would turn into small letters, e.g. `Dark Blue` becomes `dark blue`
          </ul>
      </ul>
    </p>
  </TabItem>
  <TabItem value="Paragraph" label="Paragraph">
    <p>
      <strong>Description:</strong> Use it if you want the user to enter a couple of sentences as an input
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Long Description</code>, paragraph input can be <code>65W Power Travel Adapter Trio To Fully Charge With Incredible Speed. More Powerful Than Previous Travel Adapters, It Harnesses The Power Of Super Fast Charging.</code>
    </p>
    <p>
      <strong>Specific Settings:</strong>
        <ul>
          <li><strong>Impose a Character Limit</strong></li> By enabling this toggle button, you can restrict the number of characters that the user can enter in the attribute value. This enables another field called 'Limit Characters to'.
          <li><strong>Limit Characters to</strong></li> Choose the maximum number of characters the user can enter for the attribute.
        </ul>
    </p>
  </TabItem>
  <TabItem value="URL" label="URL">
    <p>
      <strong>Description:</strong> Use it if you want the user to enter a web address
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Download Link</code>, URL input can be <code>https://www.w3.org/testfiles/resources/pdf/dummy.pdf</code>
    </p>
    <p>
      <strong>Specific Settings:</strong> None
    </p>
  </TabItem>
  <TabItem value="List" label="List">
    <p>
      <strong>Description:</strong> Use it if you want the user to choose a value from the dropdown
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Colour</code>, list input can be <code>Red</code> from a dropdown list of <code>Red, Blue, Black, Brown</code>.
    </p>
    <p>
      <strong>Specific Settings:</strong>
      <ul>
        <li><strong>Formatting</strong></li> Choose the type of formatting you want to apply to the attribute value entered by the user.
          <ul>
            <li><strong>None</strong></li> Attribute value appears as entered by the user, e.g. for colour attribute, `Dark Blue` becomes `Dark Blue`.
            <li><strong>Upper Case</strong></li> All characters in the attribute value would turn into capital letters, e.g. `Dark Blue` becomes `DARK BLUE`.
            <li><strong>Lower Case</strong></li> All characters in the attribute value would turn into small letters, e.g. `Dark Blue` becomes `dark blue`
          </ul>
        <li><strong>Restrict Values</strong></li> Choose this option to allow only specific values to be chosen for the attribute. This enables another field called 'Allowed Values'.
        <li><strong>Allowed Values</strong></li> Use this option to type and add options to the dropdown list, one-by-one.
        <li><strong>Allow Multiple Values</strong></li> Enabling this will allow your users to choose more than one value for the attribute.
      </ul>
    </p>
  </TabItem>
  <TabItem value="HTML" label="HTML">
  <p>
      <strong>Description:</strong> Use it if you want the user to enter an HTML code block
    </p>
    <p>
      <strong>Example:</strong> Not Available
    </p>
    <p>
      <strong>Specific Settings:</strong> None
    </p>
  </TabItem>
  <TabItem value="Number" label="Number">
    <p>
      <strong>Description:</strong> Use it if you want the user to enter a number
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Years of Warranty</code>, number input can be <code>2</code>
    </p>
    <p>
      <strong>Specific Settings:</strong>
      <ul>
        <li><strong>Min Value</strong></li>The minimum value that the user can enter, e.g. 1
        <li><strong>Max Value</strong></li>The maximum value that the user can enter, e.g. 950
      </ul>
    </p>
  </TabItem>
  <TabItem value="Decimal" label="Decimal">
    <p>
      <strong>Description:</strong> Use it if you want the user to enter a decimal value
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Purity</code>, decimal input can be <code>999.99</code>
    </p>
    <p>
      <strong>Specific Settings:</strong>
      <ul>
        <li><strong>Min Value</strong></li>The minimum value that the user can enter, e.g. 0.05
        <li><strong>Max Value</strong></li>The maximum value that the user can enter, e.g. 99.99
      </ul>
    </p>
  </TabItem>
  <TabItem value="Date" label="Date">
  <p>
      <strong>Description:</strong> Use it if you want the user to enter a decimal value
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Expiry Date</code>, date input can be <code>May 7, 2024</code>
    </p>
    <p>
      <strong>Specific Settings:</strong>None
    </p>
  </TabItem>
  <TabItem value="Boolean" label="Boolean">
  <p>
      <strong>Description:</strong> Use it if you want the user to choose between `Yes` or `No`
    </p>
    <p>
      <strong>Example:</strong> For <code>Attribute = Waterproof</code>, boolean input can be <code>No</code>
    </p>
    <p>
      <strong>Specific Settings:</strong> None
    </p>
  </TabItem>
  <TabItem value="Media" label="Media">
    <p>
      <strong>Description:</strong> Use it if you want the user to upload image(s)
    </p>
    <p>
      <strong>Example:</strong> Not available
    </p>
    <p>
      <strong>Specific Settings:</strong>
      <ul>
        <li><strong>Restrict Media Type</strong></li> By enabling this toggle button, you can restrict the file formats that the user can upload. This enables two more fields called 'Select Media Format' and 'Allowed Media formats'.
          <ul>
          <li><strong>Select Media Format</strong></li> Choose whether the user should enter images or videos.
          <li><strong>Allowed Media formats</strong></li> If <code>Select Media Format = Images</code>, choose the acceptable image file formats from the dropdown, e.g. jpeg, png, gif, webp, jfif. If <code>Select Media Format = Videos</code>, choose the acceptable video file formats from the dropdown, e.g. mp4, mov. 
          </ul>
        <li><strong>Proportion Restriction</strong></li> If <code>Select Media Format = Images</code>, turning on this toggle button enables two more fields called 'Aspect Ratio' and 'Dimension'. 
          <ul>
          <li><strong>Aspect Ratio</strong></li> Choose this option to accept only those images (from user) that meet the width-to-height ratio you select: 3:4, 4:3, 1:1, 16:9, and 9:16. An alternative called 'Dimension' also exists.
          <li><strong>Dimension</strong></li> Choose this option to accept only those images (from user) that meet the width and height values you enter.
          </ul>  
        <li><strong>Allow Multiple Uploads</strong></li> Choose this option to allow user to upload more than one image/video for the attribute.
        <li><strong>Max Total File Size</strong></li> Enter the acceptable combined size of multiple images/videos. If a system has a Max Total File Size limit of 10 MB, it means that the sum of the sizes of all images/videos being processed or uploaded should not exceed 10 MB.
      </ul>
    </p>
  </TabItem>
  <TabItem value="File" label="File">
    <p>
      <strong>Description:</strong> Use it if you want the user to upload file(s)
    </p>
    <p>
      <strong>Example:</strong> Not available
    </p>
    <p>
      <strong>Specific Settings:</strong>
      <ul>
        <li><strong>Allow Multiple Files</strong></li> Choose this option to allow user to upload more than one file for the attribute.
        <li><strong>Max Total File Size</strong></li> Enter the acceptable combined size of multiple files. If a system has a Max Total File Size limit of 10 MB, it means that the sum of the sizes of all files being processed or uploaded should not exceed 10 MB.
        <li><strong>Restrict File Type</strong></li> By enabling this toggle button, you can restrict the file format that the user can upload. This enables another field called 'Allowed File formats'.
        <li><strong>Allowed File formats</strong></li> Choose the acceptable file formats from the dropdown, e.g. PDF, CSV, PPT.
      </ul>
    </p>
  </TabItem>
</Tabs>
