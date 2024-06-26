import { ChatProps } from '@/lib/chat.types'
import Header from './header'
// import { VercelChat } from '@/components/chat/messages-and-input/vercel.chat'
import { SimpleChat } from '@/components/chat/messages-and-input/simple.chat'

export default function Chat({
    viewOnly = false,
    chatProps,
}: {
    viewOnly?: boolean
    chatProps?: ChatProps
}) {
    return (
        <div className="dark:bg-shade rounded-lg h-full w-full flex flex-col flex-1">
            <Header sessionId={chatProps?.id} />
            <div className="flex-1 overflow-y-auto">
                {/* <VercelChat viewOnly={viewOnly} {...chatProps} /> */}
                <SimpleChat viewOnly={viewOnly} {...chatProps} />
            </div>
        </div>
    )
}
