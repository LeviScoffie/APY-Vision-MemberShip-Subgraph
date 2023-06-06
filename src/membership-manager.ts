import { MembershipStarted
 } from "../generated/schema";
 import { BigInt, Bytes } from "@graphprotocol/graph-ts";

 import { MembershipStarted as MembershipStartedEvent } from "../generated/MembershipManager/MembershipManager";

  import  { getOrCreateMember } from "./helper";


export function handleMemberShipStarted(event: MembershipStartedEvent): void {
let member = getOrCreateMember(
                  event.params.user 
                  ,event.params.nftId
                  ,event.block.timestamp 
                  ,event.transaction.hash
                )

member.save()

 }