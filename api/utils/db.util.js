// utils/db.util.js
const AccountType = require('../models/accTypes.model');

// Utility function to check if an account type exists and get its ID
async function getAccountTypeId(accountType) {
    try {
        const formattedAccountType = accountType.trim().toLowerCase();

        let existingAccountType = await AccountType.findOne({
            where: { account_type: formattedAccountType }
        });

        let accountTypeId;

        if (existingAccountType) {
            accountTypeId = existingAccountType.id;
        } else {
            existingAccountType = await AccountType.create({ account_type: formattedAccountType });
            accountTypeId = existingAccountType.id;
        }
        return accountTypeId;
    } catch (error) {
        console.error('Error getting account type ID:', error);
        throw new Error('Internal server error Util');
    }
}

module.exports = {
    getAccountTypeId,
};
