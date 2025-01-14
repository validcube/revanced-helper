import DisconnectReason from './DisconnectReason'

/**
 * Humanized disconnect reasons for logs
 */
const HumanizedDisconnectReason = {
    [DisconnectReason.InvalidPacket]: 'has sent invalid packet',
    [DisconnectReason.Generic]: 'has been disconnected for unknown reasons',
    [DisconnectReason.TimedOut]: 'has timed out',
    [DisconnectReason.ServerError]: 'has been disconnected due to an internal server error',
    [DisconnectReason.NeverConnected]: 'had never connected to the server',
    [DisconnectReason.PlannedDisconnect]: 'has disconnected on its own',
} as const satisfies Record<DisconnectReason, string>

export default HumanizedDisconnectReason
