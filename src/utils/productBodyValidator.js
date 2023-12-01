const productBodyValidator = (request, response, next) => {
    const { name, price, stock, brand, short_description, long_description, category, free_shipping, age_from, age_to, photo } = request.body;
    const validationArray = [];
    if(typeof name !== "string") validationArray.push('Name must be string.')
    if(typeof brand !== "string") validationArray.push('Brand must be string.')
    if(typeof short_description !== "string") validationArray.push('Short description must be string.')
    if(typeof long_description !== "string") validationArray.push('Long description must be string.')
    if(typeof category !== "string") validationArray.push('Category must be string.')
    if(typeof free_shipping !== "boolean") validationArray.push('Free shipping must be boolean.')
    if(typeof age_from !== "number") validationArray.push('Age from must be number.')
    if(typeof age_to !== "number") validationArray.push('Age to must be number.')
    if(typeof photo !== "string") validationArray.push('Photo must be string.')
    if(typeof price !== "number") validationArray.push('Price must be number')
    if(price < 0) validationArray.push('Price must be a positive number')
    if(typeof stock !== "number") validationArray.push('Stock must be number')
    if(stock < 0) validationArray.push('Stock must be a positive number')
    if(validationArray.length > 0) {
        return response.status(400).json({ message: validationArray.join(' ') })
    }
      next();
  };
  
export default productBodyValidator ;