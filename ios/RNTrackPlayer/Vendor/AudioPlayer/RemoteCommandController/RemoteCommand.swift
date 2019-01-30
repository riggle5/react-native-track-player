//
//  RemoteCommand.swift
//  SwiftAudio
//
//  Created by Jørgen Henrichsen on 20/03/2018.
//

import Foundation
import MediaPlayer


public typealias RemoteCommandHandler = (MPRemoteCommandEvent) -> MPRemoteCommandHandlerStatus

public protocol RemoteCommandProtocol {
    associatedtype Command: MPRemoteCommand
    
    var id: String { get }
    var commandKeyPath: KeyPath<MPRemoteCommandCenter, Command> { get }
    var handlerKeyPath: KeyPath<RemoteCommandController, RemoteCommandHandler> { get }
}

public struct PlayBackCommand: RemoteCommandProtocol {
    
    public static let play = PlayBackCommand(id: "Play", commandKeyPath: \MPRemoteCommandCenter.playCommand, handlerKeyPath: \RemoteCommandController.handlePlayCommand)
    
    public static let pause = PlayBackCommand(id: "Pause", commandKeyPath: \MPRemoteCommandCenter.pauseCommand, handlerKeyPath: \RemoteCommandController.handlePauseCommand)
    
    public static let stop = PlayBackCommand(id: "Stop", commandKeyPath: \MPRemoteCommandCenter.stopCommand, handlerKeyPath: \RemoteCommandController.handleStopCommand)
    
    public static let togglePlayPause = PlayBackCommand(id: "TogglePlayPause", commandKeyPath: \MPRemoteCommandCenter.togglePlayPauseCommand, handlerKeyPath: \RemoteCommandController.handleTogglePlayPauseCommand)
    
    public static let nextTrack = PlayBackCommand(id: "NextTrackCommand", commandKeyPath: \MPRemoteCommandCenter.nextTrackCommand, handlerKeyPath: \RemoteCommandController.handleNextTrackCommand)
    
    public static let previousTrack = PlayBackCommand(id: "PreviousTrack", commandKeyPath: \MPRemoteCommandCenter.previousTrackCommand, handlerKeyPath: \RemoteCommandController.handlePreviousTrackCommand)
    
    
    public typealias Command = MPRemoteCommand
    
    public let id: String
    
    public var commandKeyPath: KeyPath<MPRemoteCommandCenter, MPRemoteCommand>
    
    public var handlerKeyPath: KeyPath<RemoteCommandController, RemoteCommandHandler>
    
}

public struct ChangePlaybackPositionCommand: RemoteCommandProtocol {
    
    public static let changePlaybackPosition = ChangePlaybackPositionCommand(id: "ChangePlaybackPosition", commandKeyPath: \MPRemoteCommandCenter.changePlaybackPositionCommand, handlerKeyPath: \RemoteCommandController.handleChangePlaybackPositionCommand)
    
    public typealias Command = MPChangePlaybackPositionCommand
    
    public let id: String
    
    public var commandKeyPath: KeyPath<MPRemoteCommandCenter, MPChangePlaybackPositionCommand>
    
    public var handlerKeyPath: KeyPath<RemoteCommandController, RemoteCommandHandler>
    
}

public struct SkipIntervalCommand: RemoteCommandProtocol {
    
    public static let skipForward = SkipIntervalCommand(id: "SkipForward", commandKeyPath: \MPRemoteCommandCenter.skipForwardCommand, handlerKeyPath: \RemoteCommandController.handleSkipForwardCommand)
    
    public static let skipBackward = SkipIntervalCommand(id: "SkipBackward", commandKeyPath: \MPRemoteCommandCenter.skipBackwardCommand, handlerKeyPath: \RemoteCommandController.handleSkipBackwardCommand)

    public typealias Command = MPSkipIntervalCommand
    
    public let id: String
    
    public var commandKeyPath: KeyPath<MPRemoteCommandCenter, MPSkipIntervalCommand>
    
    public var handlerKeyPath: KeyPath<RemoteCommandController, RemoteCommandHandler>
    
    func set(preferredIntervals: [NSNumber]) -> SkipIntervalCommand {
        MPRemoteCommandCenter.shared()[keyPath: commandKeyPath].preferredIntervals = preferredIntervals
        return self
    }
    
}

public enum RemoteCommand {

    case play
    
    case pause
    
    case stop
    
    case togglePlayPause
    
    case next
    
    case previous
    
    case changePlaybackPosition
    
    case skipForward(preferredIntervals: [NSNumber])
    
    case skipBackward(preferredIntervals: [NSNumber])
    
    /**
     All values in an array for convenience.
     Don't use for associated values.
     */
    static func all() -> [RemoteCommand] {
        return [
            .play,
            .pause,
            .stop,
            .togglePlayPause,
            .next,
            .previous,
            .changePlaybackPosition,
            .skipForward(preferredIntervals: []),
            .skipBackward(preferredIntervals: []),
        ]
    }
    
}