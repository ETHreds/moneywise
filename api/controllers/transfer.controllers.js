const { Account } = require('../models/accounts.model');
const { Transfer } = require('../models/transfer.model')

async function createTransfer(req, res) {
    try {
        const { accountFromId, accountToId, amount, transactionCost } = req.body;

        transactionCost = transactionCost || 0;

        if (!accountFromId || !accountToId || !amount) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const sourceAccount = await Account.findByPk(accountFromId);
        const destinationAccount = await Account.findByPk(accountToId);
        if (!sourceAccount || !destinationAccount) {
            return res.status(404).json({ error: 'One or both accounts not found' });
        }

        const transfer = await Transfer.create({
            accountFromId,
            accountToId,
            amount,
            transactionCost
        });


        await sourceAccount.decrement('current_balance', { by: amount + transactionCost });
        await destinationAccount.increment('current_balance', { by: amount });

        return res.status(201).json(transfer);
    } catch (error) {
        console.error('Error creating transfer:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


// delete or reverse

async function deleteTransfer(req, res) {
    try {
        const { id, isReversal } = req.body;
        if (!id) {
            return res.status(400).json({ error: 'Missing transfer ID' });
        }

        const transfer = await Transfer.findByPk(id);
        if (!transfer) {
            return res.status(404).json({ error: 'Transfer not found' });
        }

        // Update the account balances to reverse the math
        const sourceAccount = await Account.findByPk(transfer.accountFromId);
        const destinationAccount = await Account.findByPk(transfer.accountToId);
        await sourceAccount.increment('current_balance', { by: transfer.amount + transfer.transactionCost });
        await destinationAccount.decrement('current_balance', { by: transfer.amount });

        await transfer.destroy();

        return res.status(200).json({ message: 'Transfer deleted and transaction reversed' });
    } catch (error) {
        console.error('Error deleting transfer:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    deleteTransfer
};


module.exports = {
    createTransfer
};
