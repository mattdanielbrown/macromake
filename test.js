import test from 'ava';
import macromake from '.';

test('title', t => {
	t.throws(() => {
		macromake(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(macromake('unicorns'), 'unicorns & rainbows');
});
