let customerId, customEvent, customAttributeName, customAttributeValue, testPush, productId, price, currency, quantity;

document.addEventListener('DOMContentLoaded', init, false);
function init(){
  function changeUser () {
    customerId = document.getElementById("change_userid").value;

    var identityRequest = {
      userIdentities: {
        customerid: customerId,    
      }
    };
    mParticle.Identity.login(identityRequest);
    alert(customerId);
    window.location.reload();
  }
  var submit_userid = document.getElementById('submit_userid').addEventListener('click', changeUser, true);

  function logEvent () {
    customEvent = document.getElementById("add_customevent").value;
    alert(customEvent);
    mParticle.logEvent(customEvent);
    window.location.reload();
  }
  var submit_customevent = document.getElementById('submit_customevent').addEventListener('click', logEvent, true);

  function logAttribute () {
    customAttributeName = document.getElementById("custom_attribute_name").value;
    customAttributeValue = document.getElementById("custom_attribute_value").value;
    alert(customAttributeName + " and " + customAttributeValue);
    mParticle.Identity.getCurrentUser().setUserAttribute(customAttributeName, customAttributeValue);
    window.location.reload();
  }
    var submit_customattribute = document.getElementById('submit_customattribute').addEventListener('click', logAttribute, true);
};

/**
//change user
document.getElementById("submit_userid").addEventListener("click", function () {
    userId = document.getElementById("change_userid").value;
    braze.changeUser(userId);
});

//log custom event
document.getElementById("submit_push").addEventListener("click", function () {
    testPush = "Test Push"
    braze.logCustomEvent(testPush);
});

//log purchases
document.getElementById("submit_purchaseevent").addEventListener("click", function () {
    productId = document.getElementById("add_productid").value;
    price = document.getElementById("add_price").value;
    currency = "USD"
    quantity = document.getElementById("add_quantity").value;
    braze.logPurchase(productId, price, currency, quantity);

    alert("Submitted purchase event to Braze with: " + productId + " " + price + " " + currency + " " + quantity);
});
**/