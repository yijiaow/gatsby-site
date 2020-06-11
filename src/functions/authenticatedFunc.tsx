export const handler = (event, context) => {
  if (context.clientContext) {
    const { user } = context.clientContext
    // Do stuff...
  }
}
