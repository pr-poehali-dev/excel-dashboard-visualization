import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const lineData = [
  { name: 'Янв', value: 4000, target: 3500 },
  { name: 'Фев', value: 3000, target: 3800 },
  { name: 'Мар', value: 5000, target: 4200 },
  { name: 'Апр', value: 4500, target: 4500 },
  { name: 'Май', value: 6000, target: 5000 },
  { name: 'Июн', value: 5500, target: 5200 },
];

const pieData = [
  { name: 'Продукт А', value: 35 },
  { name: 'Продукт Б', value: 25 },
  { name: 'Продукт В', value: 20 },
  { name: 'Продукт Г', value: 20 },
];

const barData = [
  { name: 'Пн', value: 24 },
  { name: 'Вт', value: 31 },
  { name: 'Ср', value: 28 },
  { name: 'Чт', value: 35 },
  { name: 'Пт', value: 40 },
  { name: 'Сб', value: 22 },
  { name: 'Вс', value: 18 },
];

const tableData = [
  { id: 1, metric: 'Конверсия', value: '3.2%', change: '+0.5%', status: 'up' },
  { id: 2, metric: 'Средний чек', value: '₽4,250', change: '+12%', status: 'up' },
  { id: 3, metric: 'Отказы', value: '42%', change: '-5%', status: 'down' },
  { id: 4, metric: 'Время на сайте', value: '3:24', change: '+18s', status: 'up' },
  { id: 5, metric: 'Новые клиенты', value: '1,284', change: '+234', status: 'up' },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

const Speedometer = ({ value, max, title }: { value: number; max: number; title: string }) => {
  const percentage = (value / max) * 100;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setDisplayValue(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getColor = () => {
    if (percentage >= 80) return 'hsl(var(--chart-4))';
    if (percentage >= 60) return 'hsl(var(--chart-2))';
    if (percentage >= 40) return 'hsl(var(--chart-3))';
    return 'hsl(var(--destructive))';
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={getColor()}
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray={`${(displayValue / 100) * 251.2} 251.2`}
            className="transition-all duration-1000 ease-out"
          />
          <text
            x="100"
            y="85"
            textAnchor="middle"
            className="text-4xl font-bold fill-foreground"
          >
            {Math.round(displayValue)}%
          </text>
          <text
            x="100"
            y="105"
            textAnchor="middle"
            className="text-sm fill-muted-foreground"
          >
            {title}
          </text>
        </svg>
      </div>
    </div>
  );
};

const GasEngineIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="12" y="16" width="6" height="12" rx="1" fill="currentColor" opacity="0.3"/>
    <rect x="22" y="16" width="6" height="12" rx="1" fill="currentColor" opacity="0.3"/>
    <circle cx="15" cy="22" r="2" fill="currentColor"/>
    <circle cx="25" cy="22" r="2" fill="currentColor"/>
    <line x1="15" y1="8" x2="15" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="25" y1="8" x2="25" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M32 20h4M32 24h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <rect x="10" y="30" width="4" height="3" rx="1" fill="currentColor"/>
    <rect x="26" y="30" width="4" height="3" rx="1" fill="currentColor"/>
  </svg>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <div className="p-6 max-w-[1600px] mx-auto space-y-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg border-2 border-primary/20">
              <GasEngineIcon />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Аналитический Дашборд</h1>
              <p className="text-muted-foreground">Мониторинг ключевых показателей эффективности</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Card className="px-4 py-2 bg-card/50 border-border">
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={18} className="text-muted-foreground" />
                <span className="text-sm text-foreground">Июнь 2024</span>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="TrendingUp" size={18} />
                Общий доход
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">₽2.4M</div>
              <p className="text-xs text-primary flex items-center gap-1 mt-1">
                <Icon name="ArrowUp" size={14} />
                +12.5% за месяц
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="Users" size={18} />
                Активные пользователи
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">8,492</div>
              <p className="text-xs text-secondary flex items-center gap-1 mt-1">
                <Icon name="ArrowUp" size={14} />
                +8.1% за неделю
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="ShoppingCart" size={18} />
                Заказы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">1,284</div>
              <p className="text-xs text-accent flex items-center gap-1 mt-1">
                <Icon name="ArrowUp" size={14} />
                +18.2% за месяц
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-chart-4/10 to-chart-4/5 border-chart-4/20 hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Icon name="Target" size={18} />
                Выполнение плана
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">92%</div>
              <p className="text-xs flex items-center gap-1 mt-1" style={{ color: 'hsl(var(--chart-4))' }}>
                <Icon name="ArrowUp" size={14} />
                +4% к цели
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="LineChart" size={20} />
                Динамика продаж
              </CardTitle>
              <CardDescription>Сравнение фактических показателей с планом</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    name="Продажи"
                    dot={{ fill: 'hsl(var(--primary))', r: 5 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="target" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="План"
                    dot={{ fill: 'hsl(var(--muted-foreground))', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="PieChart" size={20} />
                Распределение по продуктам
              </CardTitle>
              <CardDescription>Доля каждой категории в обороте</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} />
                Активность по дням
              </CardTitle>
              <CardDescription>Количество действий за неделю</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Gauge" size={20} />
                Ключевые показатели эффективности
              </CardTitle>
              <CardDescription>Мониторинг целевых метрик в реальном времени</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Speedometer value={92} max={100} title="Продажи" />
                <Speedometer value={78} max={100} title="Качество" />
                <Speedometer value={85} max={100} title="Удовлетворённость" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Table" size={20} />
              Детальная аналитика
            </CardTitle>
            <CardDescription>Расшифровка основных метрик с динамикой изменений</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-muted/50">
                  <TableHead className="text-muted-foreground">Метрика</TableHead>
                  <TableHead className="text-muted-foreground">Значение</TableHead>
                  <TableHead className="text-muted-foreground">Изменение</TableHead>
                  <TableHead className="text-muted-foreground">Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id} className="border-border hover:bg-muted/30 transition-colors">
                    <TableCell className="font-medium text-foreground">{row.metric}</TableCell>
                    <TableCell className="text-foreground">{row.value}</TableCell>
                    <TableCell className={row.status === 'up' ? 'text-green-500' : 'text-red-500'}>
                      <span className="flex items-center gap-1">
                        <Icon name={row.status === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                        {row.change}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Progress 
                        value={row.status === 'up' ? 75 : 45} 
                        className="h-2"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;