// 'use client';

// import { useState } from 'react';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { User, Settings, LogOut, Lock } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useProfileStore } from '@/stores/profile';
// import useAuthStore from '@/stores/auth';
// import { ChangePasswordDialog } from './change-password-dialog';
// interface UserNavProps {
//   user?: {
//     name: string;
//     email: string;
//     avatar?: string;
//   };
// }

// export function UserNav({ user }: UserNavProps) {
//   const router = useRouter();
//   const profile = useProfileStore();
//   const auth = useAuthStore();
//   const [changePasswordOpen, setChangePasswordOpen] = useState(false);
//   const handleLogout = async () => {
//     profile.resetStore();
//     auth.resetStore();
//     router.push('/login');
//   };    

//   // const initials = profile?.email
//   //   ? profile.email
//   //       .split(' ')
//   //       .map((n: string) => n[0])
//   //       .join('')
//   //       .toUpperCase()
//   //       .slice(0, 2)
//   //   : 'AD';
//   const initials = profile?.email
//     ? profile.email
//         .split('@')[0]
//         .substring(0, 2)
//         .toUpperCase()
//     : 'AD';

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="relative h-10 w-10 rounded-full">
//           <Avatar className="h-10 w-10">
//             <AvatarImage src={profile?.avatar_url || user?.avatar} alt={profile?.full_name || user?.name || 'User'} />
//             <AvatarFallback>{initials}</AvatarFallback>
//           </Avatar>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56" align="end" forceMount>
//         <DropdownMenuLabel className="font-normal">
//           <div className="flex flex-col space-y-1">
//             <p className="text-sm font-medium leading-none">
//               {profile?.full_name || 'User'}
//             </p>
//             <p className="text-xs leading-none text-muted-foreground">
//               {profile?.email || 'admin@example.com'}
//             </p>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onClick={() => router.push('/profile')}>
//           <User className="mr-2 h-4 w-4" />
//           <span>Profile</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => router.push('/settings')}>
//           <Settings className="mr-2 h-4 w-4" />
//           <span>Settings</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setChangePasswordOpen(true)}>
//           <Lock className="mr-2 h-4 w-4" />
//           <span>Đổi mật khẩu</span>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem onClick={handleLogout}>
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>Log out</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//       <ChangePasswordDialog 
//         open={changePasswordOpen} 
//         onOpenChange={setChangePasswordOpen} 
//       />
//     </DropdownMenu>
//   );
// }
