/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    'onboarding',
    {
      type: 'category',
      label: 'Attribute Builder',
      items: [
        'pim/attribute-builder'
      ],
    },
    {
      type: 'category',
      label: 'Template Builder',
      items: [
        'pim/template-builder'
      ],
    },
    {
      type: 'category',
      label: 'Category Builder',
      items: [
        'pim/category-builder'
      ],
    },
    {
      type: 'category',
      label: 'Product Dashboard',
      items: [
        'pim/product-dashboard'
      ],
    },
    {
      type: 'category',
      label: 'Task Management',
      items: [
        'task-manager/content-acquisition',
        'task-manager/content-enrichment',
        'task-manager/audit',
        'task-manager/recall-archive'
      ],
    },
  ],

};

module.exports = sidebars;
