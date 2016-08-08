const controllers = require('./controllers');

const Router = require('express').Router;
const router = new Router();

// this is where I should redirect to the angular app, and handel the rest there.
router.get('/', (req, res) => {
  res.json({ message: 'you missed the api' });
});

// I am going to do the same thing with /admin here. But that will be a different app that can update data.
// First thing that I am going to add is the message cmm, then the blogining platform.
router.get('/admin', (req, res) => {
  res.json({ message: 'TODO: make the admin page!' });
});

router.route('/user')
  .get((...args) => controllers.user.find(...args))
  .post((...args) => controllers.user.create(...args));

router.route('/user/:id')
  .put((...args) => controllers.user.update(...args))
  .get((...args) => controllers.user.findOne(...args))
  .delete((...args) => controllers.user.remove(...args));


router.route('/pet')
  .get((...args) => controllers.pet.find(...args))
  .post((...args) => controllers.pet.create(...args));

router.route('/pet/:id')
  .put((...args) => controllers.pet.update(...args))
  .get((...args) => controllers.pet.findOne(...args))
  .delete((...args) => controllers.pet.remove(...args));


module.exports = router;
