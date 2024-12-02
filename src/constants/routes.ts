export const ROUTE = {
    // Main routes
    home: '/',
    intro: '/intro',
    signIn: '/signin',
  
    // Customer routes
    customer: {
      base: '/customer',
      signUp: '/customer/signup',
      signUpComplete: '/customer/signup/complete',
      pet: {
        base: '/customer/pet',
        edit: '/customer/pet/edit',
      },
    },
  
    // Error route
    notFound: '*',
  };