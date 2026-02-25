import { useState } from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const steps = [
  { id: 1, label: 'Request Sent', desc: 'Waiting for seller approval' },
  { id: 2, label: 'Seller Accepted', desc: 'Choose rental duration' },
  { id: 3, label: 'Choose Duration', desc: 'Select how long you need the item' },
  { id: 4, label: 'Payment', desc: 'Complete your payment' },
  { id: 5, label: 'Escrow Hold', desc: 'Payment held securely' },
  { id: 6, label: 'Item Handover', desc: 'Meet and collect item' },
  { id: 7, label: 'Complete', desc: 'Payment released to seller' },
];

const Payment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [duration, setDuration] = useState(3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-8">Payment Flow</h1>

        {/* Steps */}
        <div className="space-y-4 mb-10">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.id * 0.05 }}
              className={`glass-card p-4 flex items-center gap-4 cursor-pointer transition-all ${
                step.id === currentStep ? 'border-accent/50 glow-orange' : step.id < currentStep ? 'opacity-60' : 'opacity-40'
              }`}
              onClick={() => step.id <= currentStep + 1 && setCurrentStep(step.id)}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                step.id < currentStep ? 'bg-success text-success-foreground' : step.id === currentStep ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
              }`}>
                {step.id < currentStep ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{step.label}</p>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Duration selector */}
        {currentStep >= 3 && (
          <div className="glass-card p-6 mb-6">
            <h3 className="font-semibold text-foreground mb-4">Rental Duration</h3>
            <div className="flex gap-3">
              {[1, 3, 5, 7, 14].map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    duration === d ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {d} day{d > 1 ? 's' : ''}
                </button>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-3">Total: <span className="text-accent font-bold">₹{duration * 25}</span> + ₹500 deposit</p>
          </div>
        )}

        {/* Payment method */}
        {currentStep >= 4 && (
          <div className="glass-card p-6 mb-6">
            <h3 className="font-semibold text-foreground mb-4">Payment Method</h3>
            <div className="space-y-3">
              {[
                { id: 'upi', label: 'UPI', desc: 'Pay via Google Pay, PhonePe, etc.' },
                { id: 'wallet', label: 'Fluxera Wallet', desc: 'Pay from your wallet balance' },
                { id: 'meet', label: 'Pay on Meet', desc: 'Pay cash when you collect the item' },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPaymentMethod(m.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all border ${
                    paymentMethod === m.id ? 'border-accent bg-accent/5' : 'border-border/50 bg-secondary hover:border-accent/30'
                  }`}
                >
                  <p className="font-semibold text-foreground text-sm">{m.label}</p>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep < 7 && (
          <button
            onClick={() => setCurrentStep(Math.min(currentStep + 1, 7))}
            className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-orange-light transition-colors"
          >
            {currentStep === 6 ? 'Confirm Handover' : 'Continue'}
          </button>
        )}
        {currentStep === 7 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-success text-success-foreground flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Transaction Complete!</h3>
            <p className="text-muted-foreground mt-2">Payment has been released to the seller.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;

