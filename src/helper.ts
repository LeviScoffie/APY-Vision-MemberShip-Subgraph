import { MembershipStarted
} from "../generated/schema";
import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function getOrCreateMember (
    user: Bytes
    ,nftId: BigInt
    ,startedAtTimestamp: BigInt
    ,transactionHash: Bytes

): MembershipStarted {

    let id = 'Member' +'-'+ user.toHexString() +'-'+ nftId.toString()

    let member = MembershipStarted.load(id)

    if(!member){
        member = new MembershipStarted(id)
        member.user =user 
        member.nftId = nftId 
        member.startedAtTimestamp= startedAtTimestamp
        member.transactionHash = transactionHash

    }
    return member 

} 
