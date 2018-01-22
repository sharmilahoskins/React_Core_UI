export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Manage',
      class: '',
      icon: 'icon-menu',
      children: [
        {
          name: 'Donors',
          url: '/manage/donors',
          icon: 'icon-people',
          class: 'left-padding'
        },
        {
          name: 'Donations',
          url: '/manage/donations',
          icon: 'icon-credit-card',
          class: 'left-padding'
        },
        {
          name: 'Campaigns',
          url: '/manage/campaigns',
          icon: 'icon-chart',
          class: 'left-padding'
        }
      ]
    },
    {
      name: 'Settings',
      class: '',
      icon: 'icon-menu',
      children: [
        {
          name: 'General',
          url: '/settings/general',
          icon: 'icon-docs',
          class: 'left-padding'
        },
        {
          name: 'Bank Account',
          url: '/settings/bank_account',
          icon: 'icon-wallet',
          class: 'left-padding'
        },
        {
          name: 'Account Admins',
          url: '/settings/account_admins',
          icon: 'icon-user',
          class: 'left-padding'
        }
      ]
    },
    {
      name: 'Support Center',
      class: '',
      icon: 'icon-support',
      url: "http://help.donately.com/"
    }

  ]
};
