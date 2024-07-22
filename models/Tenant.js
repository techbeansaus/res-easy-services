const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
// Define the tenant schema
const tenantSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4, unique: true },
    name: { type: String, required: true },
    domain_name: { type: String, required: true },
    subscription_status: { type: String, required: false },
    subscription_tier: { type: String, required: false }, // basic, premium
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Instance method example
tenantSchema.methods.isPremium = function() {
    return this.subscription_tier === 'premium';
};

tenantSchema.methods.isBasic = function() {
    return this.subscription_tier === 'basic';
};

// Static method example
tenantSchema.statics.findByDomain = function(domain_name) {
    return this.find({ domain_name: domain_name });
};

tenantSchema.statics.findByName = function(name) {
    return this.find({ name: name });
};

// Pre-save middleware example
tenantSchema.pre('save', function(next) {
    if (!this.isModified('subscription_status')) {
        return next();
    }
    // Perform some action before saving, e.g., logging or modifying the document
    console.log('Subscription status has been modified');
    next();
});

// Create the tenant model
const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
