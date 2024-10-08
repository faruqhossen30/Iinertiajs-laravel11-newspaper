<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vot extends Model
{
    use HasFactory;
    protected $fillable =[

        'description',
        'yes',
        'no',
        'no_comment',
        'start_date',
        'end_date',
        'ip_address',
    ];

    protected $dates = ['start_date','end_date'];
}
