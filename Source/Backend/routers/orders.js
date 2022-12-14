
const orderControllers = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

//Create order
router.post("/", authMiddleware.verifyToken, orderControllers.createOrder);

// Get order
router.get("/admin", authMiddleware.authorizeRole, orderControllers.getAllOrders);
router.get("/admin/:id", authMiddleware.authorizeRole, orderControllers.getOrderById);

// Get my cart
router.get("/cart/me", authMiddleware.verifyToken, orderControllers.getMyOrders);

// Update order
router.put("/admin/status/:id", authMiddleware.authorizeRole, orderControllers.updateOrderByStatus);
router.put("/admin/:id", authMiddleware.authorizeRole, orderControllers.updateOrder);
//Delete order
router.delete("/admin/:id",authMiddleware.authorizeRole, orderControllers.deleteOrder);

module.exports = router;

