"use client"
import { ClerkProvider, useAuth, SignIn } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import React from 'react'

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "");

const ConvexClientProvider = ({children}) => {
  //const user = auth().userId; // Fetch user information
  return (
    <ClerkProvider>
        <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
          {children}
        </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}

export default ConvexClientProvider
