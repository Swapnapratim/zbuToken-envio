/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
const {
 TransparentUpgradeableProxy,
} = require("generated");

TransparentUpgradeableProxy.AdminChanged.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.ZBU_token_AdminChanged.set(entity);
});


TransparentUpgradeableProxy.Approval.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.ZBU_token_Approval.set(entity);
});


TransparentUpgradeableProxy.Initialized.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.ZBU_token_Initialized.set(entity);
});


TransparentUpgradeableProxy.Transfer.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.ZBU_token_Transfer.set(entity);
});


TransparentUpgradeableProxy.Upgraded.handler(async ({event, context}) => {
  const entity = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.ZBU_token_Upgraded.set(entity);
});

