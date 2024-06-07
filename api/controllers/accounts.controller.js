const Account = require('../models/accounts.model')
const AccountType = require('../models/accTypes.model')
const { getAccountTypeId } = require('../utils/db.util')

// Create account
async function addAccount(req, res) {

    try {
        const { provider, amount, account_type, user_id } = req.body;
        const account_type_id = await getAccountTypeId(account_type)
        const newAccount = await Account.create({
            provider,
            user_id,
            account_type_id,
            starting_amount: amount,
        });
        res.status(201).json({ newAccount });
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
// Get  A  USERS ACCOUNTS
async function getUserAccounts(req, res) {
    const userId = req.params.user_id;

    try {
        // Find all accounts where user_id is the specified userId
        const accounts = await Account.findAll({
            where: { user_id: userId },
            include: [AccountType]
        });

        if (!accounts.length) {
            return res.status(404).json({ message: 'No accounts found.Add Accounts' });
        }
        res.json(accounts);
    } catch (error) {
        console.error('Error fetching user accounts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    addAccount,
    getUserAccounts,
};