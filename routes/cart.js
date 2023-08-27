const express = require('express');
const CartItem = require('../models/cart');
const router = express.Router();


// Add to Cart API
router.post('/add-to-cart', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Create a new cart item
    const cartItem = new CartItem({
      productId,
      quantity,
    });

    // Save the cart item to the database
    await cartItem.save();

    res.status(200).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});

// Get Cart Items API
router.get('/get-cart', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});

// Delete Cart Item API
router.delete('/delete-from-cart/:itemId', async (req, res) => {
  const { itemId } = req.params;

  try {
    // Delete the cart item from the database
    const deletedItem = await CartItem.findByIdAndDelete(itemId);

    if (deletedItem) {
      res.status(200).json({ message: 'Item removed from cart', deletedItem });
    } else {
      res.status(404).json({ message: 'Item not found in cart' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error });
  }
});

module.exports = router;

