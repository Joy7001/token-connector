
import { Coins, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface TokenDisplayProps {
  balance: number;
  transactions?: Array<{
    id: string;
    type: 'earned' | 'spent';
    amount: number;
    description: string;
    timestamp: string;
  }>;
  className?: string;
}

export const TokenDisplay = ({ balance, transactions = [], className }: TokenDisplayProps) => {
  // Calculate total earned and spent
  const earned = transactions.filter(t => t.type === 'earned').reduce((sum, t) => sum + t.amount, 0);
  const spent = transactions.filter(t => t.type === 'spent').reduce((sum, t) => sum + t.amount, 0);
  
  return (
    <Card className={`neon-border ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Coins className="h-5 w-5 mr-2 text-amber-500 dark:text-amber-400 animate-pulse" />
          <span className="neon-text">Your Token Balance</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold text-purple-700 dark:text-purple-400">{balance}</span>
          <span className="text-slate-500 dark:text-slate-400 ml-2 mb-1">tokens</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-green-500/20">
            <div className="flex items-center text-green-600 dark:text-green-400 mb-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Earned</span>
            </div>
            <div className="text-xl font-bold text-green-700 dark:text-green-400">{earned}</div>
          </div>
          
          <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-red-500/20">
            <div className="flex items-center text-red-600 dark:text-red-400 mb-1">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Spent</span>
            </div>
            <div className="text-xl font-bold text-red-700 dark:text-red-400">{spent}</div>
          </div>
        </div>
        
        {transactions.length > 0 && (
          <>
            <h4 className="font-medium text-sm text-slate-500 dark:text-slate-400 mb-3">Recent Transactions</h4>
            <div className="space-y-3">
              {transactions.slice(0, 3).map((transaction) => (
                <div 
                  key={transaction.id} 
                  className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded px-2 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    {transaction.type === 'earned' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500 dark:text-red-400 mr-2" />
                    )}
                    <div>
                      <div className="text-sm font-medium">{transaction.description}</div>
                      <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="h-3 w-3 mr-1" />
                        {transaction.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className={`font-medium ${
                    transaction.type === 'earned' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    {transaction.type === 'earned' ? '+' : '-'}{transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
