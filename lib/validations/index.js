'use strict';

function validateCreateUpdateCodesRequest (request, response, next) {
  // if (Object.keys(request.body).length === 0) {
  //   response.status(415);
  //   return response.send('Invalid payload!');
  // }

  // No need to check for no body, express will make body an empty object
  const { agentCode } = request.body;

  if (!agentCode) {
    response.status(422);
    return response.send('The CODE is required!');
  }

  next();
}

function validateCreateUpdateRequest (request, response, next) {
  if (Object.keys(request.body).length === 0) {
    response.status(415);
    return response.send('Invalid payload!');
  }

  // No need to check for no body, express will make body an empty object
  const { name, stock, id } = request.body;

  if (!name) {
    response.status(422);
    return response.send('The name is required!');
  }

  if (stock === null || isNaN(stock) || stock < 0) {
    response.status(422);
    return response.send('The stock must be greater or equal to 0!');
  }

  if (id && id !== request.params.id) {
    response.status(422);
    return response.send('Id was invalidly set on request.');
  }

  next();
}

function validateCreateUserUpdateCreateRequest (request, response, next) {
  const { firstname, lastname, username, agentcode, persona, password } = request.body;

  if (!firstname) {
    response.status(422);
    return response.send('The firstname is required!');
  }

  if (!lastname) {
    response.status(422);
    return response.send('The lastname is required!');
  }

  if (!username) {
    response.status(422);
    return response.send('The username is required!');
  }

  if (!agentcode) {
    response.status(422);
    return response.send('The agentcode is required!');
  }

  if (!persona) {
    response.status(422);
    return response.send('The persona is required!');
  }

  if (!password) {
    response.status(422);
    return response.send('The password is required!');
  }

  next();
}

function validateCreateUserUpdateRequest (request, response, next) {
  const { firstname, lastname, username, agentcode, persona, password, id } = request.body;

  if (!firstname) {
    response.status(422);
    return response.send('The firstname is required!');
  }

  if (!lastname) {
    response.status(422);
    return response.send('The lastname is required!');
  }

  if (!username) {
    response.status(422);
    return response.send('The username is required!');
  }

  if (!agentcode) {
    response.status(422);
    return response.send('The agentcode is required!');
  }

  if (!persona) {
    response.status(422);
    return response.send('The persona is required!');
  }

  if (!password) {
    response.status(422);
    return response.send('The password is required!');
  }
  // id is only for PUT on update
  if (id && id !== request.params.id) {
    response.status(422);
    return response.send('Id was invalidly set on request.');
  }

  next();
}

function validateCreateMerchantUpdateRequest (request, response, next) {
  // logger.info('>>> Validate REFERRAL request body: ');
  // if (Object.keys(request.body).length === 0) {
  //   response.status(415);
  //   return response.send('Invalid payload!');
  // }

  // No need to check for no body, express will make body an empty object
  const { yourname, referralname, agentname, agentcode, businessname, phone, email, ss, bankname, routingnumber, accountnumber, title, description } = request.body;

  if (!yourname) {
    response.status(422);
    return response.send('The yourname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has username ');
  }

  if (!referralname) {
    response.status(422);
    return response.send('The referralname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has referralname ');
  }

  if (!agentname) {
    response.status(422);
    return response.send('The agentname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has agentname ');
  }

  if (!agentcode) {
    response.status(422);
    return response.send('The agentcode is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has agentcode ');
  }

  if (!businessname) {
    response.status(422);
    return response.send('The businessname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has businessname ');
  }

  if (!phone) {
    response.status(422);
    return response.send('The phone is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has phone ');
  }

  if (!email) {
    response.status(422);
    return response.send('The email is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has email ');
  }

  if (!ss) {
    response.status(422);
    return response.send('The ss is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has ss ');
  }

  if (!bankname) {
    response.status(422);
    return response.send('The bankname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has bankname ');
  }

  if (!routingnumber) {
    response.status(422);
    return response.send('The routingnumber is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has routingnumber ');
  }

  if (!accountnumber) {
    response.status(422);
    return response.send('The accountnumber is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has accountnumber ');
  }

  if (!title) {
    response.status(422);
    return response.send('The title is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has title ');
  }

  if (!description) {
    response.status(422);
    return response.send('The description is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has description ');
  }

  // if (!published) {
  //   response.status(422);
  //   return response.send('The v is required for a refferal!');
  // } else {
  //   // logger.info('>>> Validate REFERRAL has published ');
  // }

  next();
}

function validateCreateReferralUpdateRequest (request, response, next) {
  // logger.info('>>> Validate REFERRAL request body: ');
  // if (Object.keys(request.body).length === 0) {
  //   response.status(415);
  //   return response.send('Invalid payload!');
  // }

  // No need to check for no body, express will make body an empty object
  const { yourname, referralname, agentname, agentcode, businessname, phone, title, description } = request.body;

  if (!yourname) {
    response.status(422);
    return response.send('The yourname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has username ');
  }

  if (!referralname) {
    response.status(422);
    return response.send('The referralname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has referralname ');
  }

  if (!agentname) {
    response.status(422);
    return response.send('The agentname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has agentname ');
  }

  if (!agentcode) {
    response.status(422);
    return response.send('The agentcode is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has agentcode ');
  }

  if (!businessname) {
    response.status(422);
    return response.send('The businessname is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has businessname ');
  }

  if (!phone) {
    response.status(422);
    return response.send('The phone is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has phone ');
  }

  if (!title) {
    response.status(422);
    return response.send('The title is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has title ');
  }

  if (!description) {
    response.status(422);
    return response.send('The description is required for a refferal!');
  } else {
    // logger.info('>>> Validate REFERRAL has description ');
  }

  next();
}

module.exports = {
  validateCreateUpdateRequest,
  validateCreateUserUpdateRequest,
  validateCreateUserUpdateCreateRequest,
  validateCreateReferralUpdateRequest,
  validateCreateUpdateCodesRequest,
  validateCreateMerchantUpdateRequest
};
