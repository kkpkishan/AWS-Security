{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "iam:ChangePassword",
                "iam:ResyncMFADevice",
                "iam:EnableMFADevice",
                "iam:ListMFADevices",
                "iam:ListVirtualMFADevices",
                "iam:CreateVirtualMFADevice"
            ],
            "Resource": [
                "arn:aws:iam::<AccountID>:user/${aws:username}",
                "arn:aws:iam::<AccountID>:mfa/${aws:username}"
            ],
            "Effect": "Allow"
        },
        {
            "Action": "iam:ListVirtualMFADevices",
            "Resource": "arn:aws:iam::<AccountID>:mfa/",
            "Effect": "Allow"
        },
        {
            "Condition": {
                "BoolIfExists": {
                    "aws:MultiFactorAuthPresent": "false"
                }
            },
            "Resource": "*",
            "Effect": "Deny",
            "NotAction": [
                "iam:ChangePassword",
                "iam:ResyncMFADevice",
                "iam:EnableMFADevice",
                "iam:ListMFADevices",
                "iam:ListVirtualMFADevices",
                "iam:CreateVirtualMFADevice"
            ]
        }
    ]
}
