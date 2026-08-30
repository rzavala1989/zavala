import findMyWay from 'find-my-way';
const router = findMyWay();
const handler = (req, res) => res.end('ok');

router.on('GET', '/users/:userId', handler, { operationId: 'getUserById' });

const match = router.find('GET', '/users/123');
console.log('find() keys:', Object.keys(match));
console.log('operationId with find():', match.store.operationId);
