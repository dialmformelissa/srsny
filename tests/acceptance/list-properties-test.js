import { test } from 'qunit';
import moduleForAcceptance from 'srsny/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

test('should list available properties', function(assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.listing').length, 3, 'should see 3 listings');
    });
});

test('should link to information about the company', function(assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function(assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should filter the list of properties by city', function(assert) {
  visit('/');
  fillIn('.list-filter input', 'brooklyn');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('.listing').length, 1, 'should show 1 listing');
    assert.equal(find('.listing .location:contains("Brooklyn")').length,1, 'should contain 1 listing with location Brooklyn');
  });
});
