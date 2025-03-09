
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
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Coins className="h-5 w-5 mr-2 text-amber-500" />
          Your Token Balance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end mb-6">
          <span className="text-4xl font-bold">{balance}</span>
          <span className="text-slate-500 ml-2 mb-1">tokens</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="flex items-center text-green-600 mb-1">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Earned</span>
            </div>
            <div className="text-xl font-bold">{earned}</div>
          </div>
          
          <div className="p-3 bg-red-50 rounded-lg">
            <div className="flex items-center text-red-600 mb-1">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Spent</span>
            </div>
            <div className="text-xl font-bold">{spent}</div>
          </div>
        </div>
        
        {transactions.length > 0 && (
          <>
            <h4 className="font-medium text-sm text-slate-500 mb-3">Recent Transactions</h4>
            <div className="space-y-3">
              {transactions.slice(0, 3).map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center">
                    {transaction.type === 'earned' ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500 mr-2" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-500 mr-2" />
                    )}
                    <div>
                      <div className="text-sm font-medium">{transaction.description}</div>
                      <div className="flex items-center text-xs text-slate-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {transaction.timestamp}
                      </div>
                    </div>
                  </div>
                  <div className={`font-medium ${
                    transaction.type === 'earned' ? 'text-green-600' : 'text-red-600'
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
