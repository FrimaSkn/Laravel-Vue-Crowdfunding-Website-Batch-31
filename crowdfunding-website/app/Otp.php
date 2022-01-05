<?php

namespace App;

use App\User;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    protected $guarded = [];
    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;


    protected function getUserId()
    {
        $user = User::first();
        return $user->id;
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = Str::uuid();
            }
        });

        static::creating(function ($model) {
            $model->user_id = $model->getUserId();
        });
    }

    public function user()
    {
        return $this->hasMany(User::class);
    }
}
