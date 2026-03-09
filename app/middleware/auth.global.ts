export default defineNuxtRouteMiddleware((to) => {
  const {$state: { token }} = useAuthStore()

 
  if (!token && to.path !== '/login') {
    return navigateTo('/login')
  }

  if (token && to.path === '/login' || to.path === '/') {
    return navigateTo('/products')
  }
})