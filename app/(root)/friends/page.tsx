import ConversationFallback from '@/components/ui/ui/shared/sidebar/conversation/ConversationFallback'
import ItemList from '@/components/ui/ui/shared/sidebar/item-list/ItemList'
import React from 'react'

type Props = {}

const FriendsPage = (props: Props) => {
  return (
    <>
        <ItemList title='Friends'>FriendsPage</ItemList>
        <ConversationFallback/>
    </>
    
  )
}

export default FriendsPage