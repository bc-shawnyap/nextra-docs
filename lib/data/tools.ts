import GithubIcon from "@assets/images/Github.svg";
import FileIcon from "@assets/images/File.svg";
import type { ReactNode } from "react";

interface Base {
  title: string;
  subtitle: string;
}

type Icon = {
  url: string;
  name?: string;
  altText?: string;
};

type Link = {
  href: string;
  label?: string;
  icon?: Icon | ReactNode;
};

export interface Tool extends Base {
  links: Link | Link[];
  type?: "beta" | "community";
  icon?: Icon;
  featured?: boolean;
}

export interface Tools extends Base {
  children: Tool[];
}

export const toolsResources: Tools[] = [
  {
    title: "API Clients",
    subtitle:
      "Accelerate your app development. Get started making API requests in the language of your choice with our API Clients.",
    children: [
      {
        title: "API Client",
        type: "beta",
        subtitle: "Python",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/bigcommerce-api-python",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/Python.svg",
        },
      },
      {
        title: "API Client",
        subtitle: "PHP",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/bigcommerce-api-php",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/php.svg",
        },
      },
      {
        title: "API Client",
        subtitle: "Ruby",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/bigcommerce-api-ruby",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/ruby.svg",
        },
      },
      {
        title: "API Client",
        subtitle: "NODE",
        links: [
          {
            label: null,
            href: "https://github.com/getconversio/node-bigcommerce",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/nodejs.svg",
        },
      },
    ],
  },
  {
    title: "SDKs",
    subtitle:
      "Check here for toolkits and libraries for customizing the BigCommerce platform. More coming soon!",
    children: [
      {
        title: "SDK",
        subtitle: "Checkout",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/checkout-sdk-js",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/DevCenter_4114_Icon-SDK_SJ.svg",
        },
      },
      {
        title: "APP",
        subtitle: "Open Checkout",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/checkout-js",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/nodejs.svg",
        },
      },
      {
        title: "Tool",
        subtitle: "Widget Builder",
        links: [
          {
            label: null,
            href: "https://developer.bigcommerce.com/api-docs/storefront/widgets/widget-builder",
            icon: FileIcon,
          },
          {
            label: null,
            href: "https://github.com/bigcommerce/widget-builder",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/DevCenter_4114_Icon-CLI_SJ.svg",
        },
      },
    ],
  },
  {
    title: "BigDesign",
    subtitle:
      "Resources and documentation for BigDesign, our design language system and component library.",
    children: [
      {
        title: "BigDesign",
        type: "beta",
        subtitle: "Docs",
        links: [
          {
            label: "Dev",
            href: "https://developer.bigcommerce.com/big-design/",
            icon: null,
          },
        ],
        icon: {
          url: "/BigDesign.svg",
        },
      },
      {
        title: "UI Components",
        type: "beta",
        subtitle: "REACT",
        links: [
          {
            label: "",
            href: "https://github.com/bigcommerce/big-design",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/BigDesign.svg",
        },
      },
      {
        title: "UI Kit",
        subtitle: "Figma",
        links: [
          {
            label: "Download",
            href: "https://www.figma.com/file/jTVuUkiZ1j3rux8WHG4IKK/BigDesign-UI-Kit?node-id=0%3A1%2Fduplicate",
            icon: null,
          },
        ],
        icon: {
          url: "/figma-logo.svg",
        },
      },
      {
        title: "UI Kit",
        subtitle: "Adobe Illustrator",
        links: [
          {
            label: "Download",
            href: "https://design.bigcommerce.com/bigdesign-ui-kit",
            icon: null,
          },
        ],
        icon: {
          url: "/Adobe_Illustrator_CC_icon.svg",
        },
      },
      {
        title: "Demo App",
        subtitle: "React & Node",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/channels-app/",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/Marketplace.svg",
        },
      },
    ],
  },
  {
    title: "Headless Integrations",
    subtitle:
      "The best of ecommerce combined with your platform of choice. Experience Headless Commerce with our available plugins and connectors.",
    children: [
      {
        title: "Plugin",
        subtitle: "Wordpress",
        links: [
          {
            label: null,
            href: "https://developer.bigcommerce.com/bigcommerce-for-wordpress/getting-started/introduction",
            icon: FileIcon,
          },
          {
            label: null,
            href: "https://github.com/bigcommerce/bigcommerce-for-wordpress",
            icon: GithubIcon,
          },
        ],
        icon: {
          url: "/BC-for-WordPress-plugin.svg",
        },
      },
      {
        title: "App",
        subtitle: "next.js",
        links: [
          {
            label: "Docs",
            href: "https://developer.bigcommerce.com/api-docs/storefronts/nextjs-commerce",
            icon: null,
          },
          {
            label: "Deploy",
            href: "https://nextjs.org/commerce",
            icon: null,
          },
        ],
        icon: {
          url: "/Nextjs_logo.svg",
        },
      },
      {
        title: "App",
        subtitle: "DEITY Falcon",
        links: [
          {
            label: null,
            href: "https://docs.deity.io/docs/platform/integration/bigcommerce/overview",
            icon: FileIcon,
          },
          {
            label: null,
            href: "https://github.com/deity-io/falcon",
            icon: GithubIcon,
          },
        ],
        icon: {
          name: "diety-falcon.png",
          url: "/diety-falcon.png",
        },
      },
      {
        title: "Starter Site",

        subtitle: "nuxt.js",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/bc-nuxt-vue-starter",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "nuxt.svg",
          url: "/nuxt.svg",
        },
      },
      {
        title: "Starter Site",

        subtitle: "Gatsby & Netlify",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter",
            icon: GithubIcon,
          },
          {
            label: "Netlify",
            href: "https://templates.netlify.com/template/bigcommerce-gatsby-netlify-cms-starter/",

            icon: null,
          },
        ],
        icon: {
          name: "Gatsby-Logo.svg",

          url: "/Gatsby-Logo.svg",
        },
      },
      {
        title: "Connector",
        type: "community",

        subtitle: "Drupal",
        links: [
          {
            label: "Get Module",
            href: "https://www.drupal.org/project/bigcommerce",

            icon: null,
          },
        ],
        icon: {
          name: "drupal%208%20logo%20isolated.svg",

          url: "/drupal%208%20logo%20isolated.svg",
        },
      },
      {
        title: "Connector",
        type: "community",

        subtitle: "Acquia & drupal",
        links: [
          {
            label: null,
            href: "https://github.com/thirdandgrove/acf_bc",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "acquia-logo.svg",
          url: "/acquia-logo.svg",
        },
      },
      {
        title: "Connector",
        type: "community",

        subtitle: "Bloomreach",
        links: [
          {
            label: "Learn More",
            href: "https://www.bigcommerce.com/solutions/bloomreach/",

            icon: null,
          },
        ],
        icon: {
          name: "Bloomreach.svg",
          url: "/Bloomreach.svg",
        },
      },
      {
        title: "Connector",
        type: "community",

        subtitle: "Sitecore",
        links: [
          {
            label: "DOCS",
            href: "https://sitecoreextend.imediainc.com/load",

            icon: null,
          },
          {
            label: " APP",
            href: "https://www.bigcommerce.com/apps/sitecore-extend/",

            icon: null,
          },
        ],
        icon: {
          name: "Sitecore.svg",
          url: "/Sitecore.svg",
        },
      },
      {
        title: "Custom Solution",

        subtitle: "Guide to headless",
        links: [
          {
            label: "View Guide",
            href: "https://developer.bigcommerce.com/api-docs/storefronts/guide/overview",
            icon: null,
          },
        ],
        icon: {
          name: "Custom-Solution.svg",
          url: "/Custom-Solution.svg",
        },
      },
    ],
  },
  {
    title: "Theme Resources",
    subtitle:
      "Contribute to our open source Stencil projects on GitHub. Use these projects as a jumping off point or submit submit enhancements as a pull request.",
    children: [
      {
        title: "Theme",
        subtitle: "cornerstone",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/cornerstone",
            icon: GithubIcon,
          },
        ],
        icon: {
          name: "DevCenter_4114_Icon-Theme_SJ.svg",

          url: "/DevCenter_4114_Icon-Theme_SJ.svg",
        },
      },
      {
        title: "CLI",

        subtitle: "Stencil CLI",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/stencil-cli",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "DevCenter_4114_Icon-CLI_SJ.svg",

          url: "/DevCenter_4114_Icon-CLI_SJ.svg",
        },
      },
      {
        title: "JS",

        subtitle: "Stencil Utils",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/stencil-utils",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "DevCenter_4114_Icon-js-library.svg",

          url: "/DevCenter_4114_Icon-js-library.svg",
        },
      },
    ],
  },
  {
    title: "Sample Apps",
    subtitle:
      "Looking for inspiration? Here's a directory of open source projects from the BigCommerce team and community.",
    children: [
      {
        title: "Sample Apps",

        subtitle: "Node & Next.js",
        links: [
          {
            label: null,
            href: "https://developer.bigcommerce.com/api-docs/apps/tutorials/sample-app-nextjs/introduction",

            icon: FileIcon,
          },
          {
            label: null,
            href: "https://github.com/bigcommerce/sample-app-nodejs",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "Nextjs_logo.svg",

          url: "/Nextjs_logo.svg",
        },
      },
      {
        title: "Sample App",

        subtitle: "Laravel & React",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/laravel-react-sample-app",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "php.svg",

          url: "/php.svg",
        },
      },
      {
        title: "Sample App",
        type: "community",

        subtitle: "Node & Aws",
        links: [
          {
            label: null,
            href: "https://github.com/hatertron3000/amplify-bigcommerce",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "nodejs.svg",

          url: "/nodejs.svg",
        },
      },
      {
        title: "App",

        subtitle: "Ruby & Omniauth",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/omniauth-bigcommerce",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "ruby.svg",

          url: "/ruby.svg",
        },
      },
      {
        title: "Hello World",

        subtitle: "Python & Flask",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/hello-world-app-python-flask",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "Python.svg",

          url: "/Python.svg",
        },
      },
      {
        title: "Hello World",

        subtitle: "PHP & SILEX",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/hello-world-app-php-silex",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "php.svg",

          url: "/php.svg",
        },
      },
      {
        title: "Hello World",

        subtitle: "Ruby & Sinatra",
        links: [
          {
            label: null,
            href: "https://github.com/bigcommerce/hello-world-app-ruby-sinatra",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "ruby.svg",

          url: "/ruby.svg",
        },
      },
      {
        title: "Custom App",

        subtitle: "Guide To Apps",
        links: [
          {
            label: "View Guide",
            href: "https://developer.bigcommerce.com/api-docs/apps/guide/intro",

            icon: null,
          },
        ],
        icon: {
          name: "Custom-Solution.svg",

          url: "/Custom-Solution.svg",
        },
      },
    ],
  },
  {
    title: "Foundations",
    subtitle:
      "These open-sourced applications help you accelerate custom development of specific use cases by leapfrogging the foundational integration points.",
    children: [
      {
        title: "Subscription",

        subtitle: "Node & Next.js",
        links: [
          {
            href: "https://developer.bigcommerce.com/docs/ae2455ab4d3d8-subscription-foundation",
            icon: FileIcon,
          },
          {
            href: "https://github.com/bigcommerce/subscription-foundation",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "BigCommerce-logomark-whitebg.png",
          url: "/BigCommerce-logomark-whitebg.png",
        },
      },
      {
        title: "Point of Sale",

        subtitle: "Node & Next.js",
        links: [
          {
            href: "https://developer.bigcommerce.com/docs/495a2058c70b4-pos-foundation",
            icon: FileIcon,
          },
          {
            href: "https://github.com/bigcommerce/point-of-sale-foundation",

            icon: GithubIcon,
          },
        ],
        icon: {
          name: "BigCommerce-logomark-whitebg.png",
          url: "/BigCommerce-logomark-whitebg.png",
        },
      },
    ],
  },
];
